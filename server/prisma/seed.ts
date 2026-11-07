import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient, Role, RiskLevel } from '../src/generated/prisma/index.js'
import bcrypt from 'bcryptjs'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const workspace = await prisma.workspace.upsert({ where: { id: 'demo-workspace' }, update: {}, create: { id: 'demo-workspace', name: 'Northstar Industries' } })
  const password = await bcrypt.hash('demo1234', 12)
  const user = await prisma.user.upsert({ where: { email: 'rohan@northstar.example' }, update: { workspaceId: workspace.id, role: Role.MANAGER }, create: { id: 'demo-user', name: 'Rohan Kapoor', email: 'rohan@northstar.example', password, role: Role.MANAGER, workspaceId: workspace.id } })
  const records = [
    { id: 'demo-supplier-apex', name: 'Apex Components', companyName: 'Apex Components Pvt Ltd', email: 'ops@apex.example', location: 'Pune, India', industry: 'Manufacturing', categories: 'Electronics', averageDeliveryDays: 6, onTimeRate: 96, qualityRating: 98, priceConsistency: 94, riskScore: 18, riskLevel: RiskLevel.LOW },
    { id: 'demo-supplier-vertex', name: 'Vertex Manufacturing', companyName: 'Vertex Manufacturing Co', email: 'sales@vertex.example', location: 'Chennai, India', industry: 'Manufacturing', categories: 'Machinery', averageDeliveryDays: 11, onTimeRate: 88, qualityRating: 91, priceConsistency: 87, riskScore: 42, riskLevel: RiskLevel.MEDIUM },
    { id: 'demo-supplier-nova', name: 'Nova Industrial', companyName: 'Nova Industrial Ltd', email: 'hello@nova.example', location: 'Bengaluru, India', industry: 'Manufacturing', categories: 'Raw materials', averageDeliveryDays: 14, onTimeRate: 81, qualityRating: 89, priceConsistency: 82, riskScore: 49, riskLevel: RiskLevel.MEDIUM },
    { id: 'demo-supplier-orion', name: 'Orion Logistics', companyName: 'Orion Logistics Pvt Ltd', email: 'ops@orion.example', location: 'Mumbai, India', industry: 'Logistics', categories: 'Logistics', averageDeliveryDays: 18, onTimeRate: 72, qualityRating: 78, priceConsistency: 75, riskScore: 71, riskLevel: RiskLevel.HIGH },
  ]
  for (const record of records) await prisma.supplier.upsert({ where: { id: record.id }, update: { ...record, ownerId: user.id, workspaceId: workspace.id }, create: { ...record, ownerId: user.id, workspaceId: workspace.id } })
  console.log(`Seeded workspace ${workspace.name} with ${records.length} suppliers`)
}

main().catch((error) => { console.error(error); process.exitCode = 1 }).finally(() => prisma.$disconnect())
