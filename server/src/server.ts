import express, { type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { env } from './config/env.js'
import { prisma } from './db/prisma.js'
import { Role, RiskLevel } from './generated/prisma/index.js'

declare global {
  namespace Express {
    interface Request { user?: { id: string; role: Role; workspaceId: string } }
  }
}

const app = express()
const authCookie = 'supplyiq_token'
const pagination = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().trim().max(100).optional(),
  category: z.string().trim().max(100).optional(),
  location: z.string().trim().max(100).optional(),
  riskLevel: z.nativeEnum(RiskLevel).optional(),
  sortBy: z.enum(['name', 'score', 'riskScore', 'onTimeRate', 'qualityRating', 'createdAt']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
})
const supplierInput = z.object({
  name: z.string().trim().min(2).max(150),
  companyName: z.string().trim().min(2).max(150),
  email: z.string().email(),
  phone: z.string().trim().max(40).optional(),
  location: z.string().trim().min(2).max(120),
  industry: z.string().trim().min(2).max(100),
  categories: z.string().trim().min(2).max(300),
  averageDeliveryDays: z.number().min(0).max(365),
  onTimeRate: z.number().min(0).max(100),
  qualityRating: z.number().min(0).max(100),
  priceConsistency: z.number().min(0).max(100),
  certifications: z.string().max(500).optional(),
})
const authInput = z.object({ email: z.string().email(), password: z.string().min(8).max(128) })
const registerInput = authInput.extend({ name: z.string().trim().min(2).max(100), confirmPassword: z.string().min(8).max(128) }).refine((value) => value.password === value.confirmPassword, { path: ['confirmPassword'], message: 'Passwords do not match' })

app.use(helmet())
app.use(cors({ origin: env.CLIENT_ORIGIN, credentials: true }))
app.use(express.json({ limit: '100kb' }))
app.use(cookieParser())
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 300, standardHeaders: 'draft-8', legacyHeaders: false }))

function signToken(user: { id: string; role: Role; workspaceId: string }) {
  return jwt.sign({ sub: user.id, role: user.role, workspaceId: user.workspaceId }, env.JWT_SECRET, { expiresIn: '8h' })
}

function setAuthCookie(res: Response, token: string) {
  res.cookie(authCookie, token, { httpOnly: true, secure: env.NODE_ENV === 'production', sameSite: env.NODE_ENV === 'production' ? 'none' : 'lax', maxAge: 8 * 60 * 60 * 1000 })
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies[authCookie] as string | undefined
  if (!token) return res.status(401).json({ error: 'Authentication required' })
  try {
    const payload = jwt.verify(token, env.JWT_SECRET)
    if (typeof payload !== 'object' || typeof payload.sub !== 'string' || typeof payload.workspaceId !== 'string' || !Object.values(Role).includes(payload.role as Role)) throw new Error('Invalid token')
    req.user = { id: payload.sub, role: payload.role as Role, workspaceId: payload.workspaceId }
    return next()
  } catch {
    return res.status(401).json({ error: 'Invalid or expired session' })
  }
}

function requireRole(...roles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => req.user && roles.includes(req.user.role) ? next() : res.status(403).json({ error: 'Insufficient permissions' })
}

function publicUser(user: { id: string; name: string; email: string; role: Role; workspaceId: string }) {
  return { id: user.id, name: user.name, email: user.email, role: user.role, workspaceId: user.workspaceId }
}

app.get('/api/health', async (_req, res) => {
  try { await prisma.$queryRaw`SELECT 1`; res.json({ status: 'ok', database: 'connected' }) } catch { res.status(503).json({ status: 'error', database: 'unavailable' }) }
})

app.post('/api/auth/register', async (req, res, next) => {
  try {
    const input = registerInput.parse(req.body)
    const existing = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } })
    if (existing) return res.status(409).json({ error: 'Email is already registered' })
    const workspace = await prisma.workspace.create({ data: { name: `${input.name}'s Workspace` } })
    const user = await prisma.user.create({ data: { name: input.name, email: input.email.toLowerCase(), password: await bcrypt.hash(input.password, 12), role: Role.MANAGER, workspaceId: workspace.id } })
    setAuthCookie(res, signToken(user))
    return res.status(201).json({ user: publicUser(user) })
  } catch (error) { return next(error) }
})

app.post('/api/auth/login', async (req, res, next) => {
  try {
    const input = authInput.parse(req.body)
    const user = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } })
    if (!user || !(await bcrypt.compare(input.password, user.password))) return res.status(401).json({ error: 'Invalid email or password' })
    setAuthCookie(res, signToken(user))
    return res.json({ user: publicUser(user) })
  } catch (error) { return next(error) }
})

app.post('/api/auth/logout', (_req, res) => { res.clearCookie(authCookie); res.status(204).send() })
app.get('/api/auth/me', requireAuth, async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user!.id } })
    return user ? res.json({ user: publicUser(user) }) : res.status(401).json({ error: 'User no longer exists' })
  } catch (error) { return next(error) }
})

app.get('/api/dashboard', requireAuth, async (req, res, next) => {
  try {
    const where = { workspaceId: req.user!.workspaceId }
    const [total, highRisk, mediumRisk, lowRisk, aggregate, suppliers] = await Promise.all([
      prisma.supplier.count({ where }), prisma.supplier.count({ where: { ...where, riskLevel: RiskLevel.HIGH } }),
      prisma.supplier.count({ where: { ...where, riskLevel: RiskLevel.MEDIUM } }), prisma.supplier.count({ where: { ...where, riskLevel: RiskLevel.LOW } }),
      prisma.supplier.aggregate({ where, _avg: { onTimeRate: true, qualityRating: true, riskScore: true } }),
      prisma.supplier.findMany({ where, orderBy: { updatedAt: 'desc' }, take: 10 }),
    ])
    return res.json({ metrics: { totalSuppliers: total, highRiskSuppliers: highRisk, averagePerformance: Number((((aggregate._avg.onTimeRate ?? 0) + (aggregate._avg.qualityRating ?? 0)) / 2).toFixed(1)), procurementSpend: 0 }, riskDistribution: { low: lowRisk, medium: mediumRisk, high: highRisk }, suppliers })
  } catch (error) { return next(error) }
})

app.get('/api/suppliers', requireAuth, async (req, res, next) => {
  try {
    const query = pagination.parse(req.query)
    const where = { workspaceId: req.user!.workspaceId, ...(query.search ? { OR: [{ name: { contains: query.search, mode: 'insensitive' as const } }, { companyName: { contains: query.search, mode: 'insensitive' as const } }, { location: { contains: query.search, mode: 'insensitive' as const } }] } : {}), ...(query.category ? { categories: { contains: query.category, mode: 'insensitive' as const } } : {}), ...(query.location ? { location: { contains: query.location, mode: 'insensitive' as const } } : {}), ...(query.riskLevel ? { riskLevel: query.riskLevel } : {}) }
    const [items, total] = await Promise.all([prisma.supplier.findMany({ where, orderBy: { [query.sortBy]: query.sortOrder }, skip: (query.page - 1) * query.limit, take: query.limit }), prisma.supplier.count({ where })])
    return res.json({ items, pagination: { page: query.page, limit: query.limit, total, pages: Math.ceil(total / query.limit) } })
  } catch (error) { return next(error) }
})

app.get('/api/suppliers/:id', requireAuth, async (req, res, next) => {
  try {
    const supplier = await prisma.supplier.findFirst({ where: { id: req.params.id as string, workspaceId: req.user!.workspaceId }, include: { performances: { orderBy: { createdAt: 'desc' }, take: 12 }, products: true, reviews: true } })
    return supplier ? res.json(supplier) : res.status(404).json({ error: 'Supplier not found' })
  } catch (error) { return next(error) }
})

app.post('/api/suppliers', requireAuth, requireRole(Role.ADMIN, Role.MANAGER), async (req, res, next) => {
  try {
    const input = supplierInput.parse(req.body)
    const supplier = await prisma.supplier.create({ data: { ...input, ownerId: req.user!.id, workspaceId: req.user!.workspaceId } })
    return res.status(201).json(supplier)
  } catch (error) { return next(error) }
})

app.put('/api/suppliers/:id', requireAuth, requireRole(Role.ADMIN, Role.MANAGER), async (req, res, next) => {
  try {
    const input = supplierInput.partial().parse(req.body)
    const existing = await prisma.supplier.findFirst({ where: { id: req.params.id as string, workspaceId: req.user!.workspaceId } })
    if (!existing) return res.status(404).json({ error: 'Supplier not found' })
    const supplier = await prisma.supplier.update({ where: { id: existing.id }, data: input })
    return res.json(supplier)
  } catch (error) { return next(error) }
})

app.delete('/api/suppliers/:id', requireAuth, requireRole(Role.ADMIN, Role.MANAGER), async (req, res, next) => {
  try {
    const deleted = await prisma.supplier.deleteMany({ where: { id: req.params.id as string, workspaceId: req.user!.workspaceId } })
    return deleted.count ? res.status(204).send() : res.status(404).json({ error: 'Supplier not found' })
  } catch (error) { return next(error) }
})

app.post('/api/tco/calculate', requireAuth, (req, res, next) => {
  try {
    const input = z.object({ product: z.number().nonnegative(), transportation: z.number().nonnegative().default(0), taxes: z.number().nonnegative().default(0), storage: z.number().nonnegative().default(0), inspection: z.number().nonnegative().default(0), expectedDefect: z.number().nonnegative().default(0), delay: z.number().nonnegative().default(0), other: z.number().nonnegative().default(0) }).parse(req.body)
    return res.json({ ...input, total: Object.values(input).reduce((sum, value) => sum + value, 0) })
  } catch (error) { return next(error) }
})

app.post('/api/comparisons', requireAuth, async (req, res, next) => {
  try {
    const ids = z.array(z.string()).min(2).max(4).parse(req.body.supplierIds)
    const suppliers = await prisma.supplier.findMany({ where: { id: { in: ids }, workspaceId: req.user!.workspaceId } })
    if (suppliers.length < 2) return res.status(400).json({ error: 'At least two accessible suppliers are required' })
    const ranked = suppliers.map((supplier) => {
      const delivery = supplier.onTimeRate
      const quality = supplier.qualityRating
      const consistency = supplier.priceConsistency
      const risk = 100 - supplier.riskScore
      const score = Math.round(delivery * 0.3 + quality * 0.25 + consistency * 0.2 + risk * 0.15 + Math.min(100, supplier.onTimeRate * 0.1))
      return { supplier, score, breakdown: { delivery, quality, consistency, risk }, strengths: [delivery >= 90 ? 'Reliable delivery' : 'Delivery needs monitoring', quality >= 90 ? 'Strong quality record' : 'Quality improvement opportunity'] }
    }).sort((a, b) => b.score - a.score)
    return res.json({ rankings: ranked, recommendation: ranked[0] ? { supplierId: ranked[0].supplier.id, reason: `${ranked[0].supplier.name} leads on the weighted reliability, quality, consistency, and risk assessment.` } : null })
  } catch (error) { return next(error) }
})

app.post('/api/suppliers/:id/risk-assessment', requireAuth, async (req, res, next) => {
  try {
    const supplier = await prisma.supplier.findFirst({ where: { id: req.params.id as string, workspaceId: req.user!.workspaceId } })
    if (!supplier) return res.status(404).json({ error: 'Supplier not found' })
    const score = Math.round((100 - supplier.onTimeRate) * 0.35 + (100 - supplier.qualityRating) * 0.25 + (100 - supplier.priceConsistency) * 0.2 + supplier.riskScore * 0.2)
    const classification = score >= 60 ? RiskLevel.HIGH : score >= 30 ? RiskLevel.MEDIUM : RiskLevel.LOW
    const indicators = { delivery: supplier.onTimeRate, quality: supplier.qualityRating, priceConsistency: supplier.priceConsistency, riskScore: supplier.riskScore, evidenceType: 'historical supplier fields' }
    const assessment = await prisma.riskAssessment.create({ data: { supplierId: supplier.id, score, classification, explanation: `Calculated from delivery reliability, quality, price consistency, and the stored risk score for ${supplier.name}.`, indicators: JSON.stringify(indicators), simulated: false } })
    await prisma.supplier.update({ where: { id: supplier.id }, data: { riskScore: score, riskLevel: classification } })
    return res.status(201).json(assessment)
  } catch (error) { return next(error) }
})

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof z.ZodError) return res.status(400).json({ error: 'Invalid request', details: error.issues })
  console.error(error)
  return res.status(500).json({ error: 'Internal server error' })
})

const server = app.listen(env.PORT, () => console.log(`SupplyIQ API listening on http://localhost:${env.PORT}`))
process.once('SIGINT', async () => { await prisma.$disconnect(); server.close() })
process.once('SIGTERM', async () => { await prisma.$disconnect(); server.close() })
