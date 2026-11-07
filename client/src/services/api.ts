import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:4000/api',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

export type Supplier = {
  id: string
  name: string
  companyName: string
  email: string
  location: string
  industry: string
  categories: string
  averageDeliveryDays: number
  onTimeRate: number
  qualityRating: number
  priceConsistency: number
  riskScore: number
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH'
  updatedAt: string
}

export type User = { id: string; name: string; email: string; role: 'ADMIN' | 'MANAGER' | 'ANALYST'; workspaceId: string }

export type Dashboard = {
  metrics: { totalSuppliers: number; highRiskSuppliers: number; averagePerformance: number; procurementSpend: number }
  riskDistribution: { low: number; medium: number; high: number }
  suppliers: Supplier[]
}
