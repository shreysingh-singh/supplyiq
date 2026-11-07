import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, Link, useNavigate } from 'react-router-dom'
import {
  Activity, ArrowUpRight, BarChart3, Bell, Boxes, ChevronDown, CircleDollarSign,
  FileSearch, LayoutDashboard, Menu, Plus, Search, Settings,
  ShieldAlert, Sparkles, Truck, Users, X
} from 'lucide-react'
import './App.css'
import { api, type Dashboard, type Supplier as ApiSupplier, type User } from './services/api'
import axios from 'axios'

type Supplier = {
  id: string; name: string; initials: string; location: string; category: string;
  score: number; risk: 'Low' | 'Medium' | 'High'; spend: string; delivery: number;
  quality: number; color: string; status: string
}

const colors = ['#dceafe', '#e5e3ff', '#d9f6ec', '#ffe6d8', '#fbe2f0']
const toUiSupplier = (supplier: ApiSupplier, index: number): Supplier => ({
  id: supplier.id, name: supplier.name, initials: supplier.name.split(' ').map((part) => part[0]).join('').slice(0, 2),
  location: supplier.location, category: supplier.categories, score: Math.round((supplier.onTimeRate + supplier.qualityRating + supplier.priceConsistency + (100 - supplier.riskScore)) / 4),
  risk: supplier.riskLevel[0] + supplier.riskLevel.slice(1).toLowerCase() as Supplier['risk'], spend: '$—', delivery: supplier.onTimeRate,
  quality: supplier.qualityRating, color: colors[index % colors.length] ?? colors[0], status: supplier.riskLevel === 'HIGH' ? 'Action needed' : supplier.riskLevel === 'MEDIUM' ? 'Review due' : 'On track',
})

const nav = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Suppliers', icon: Users },
  { label: 'Quotations', icon: FileSearch },
  { label: 'Risk & compliance', icon: ShieldAlert },
  { label: 'Performance', icon: Activity },
  { label: 'Cost analysis', icon: CircleDollarSign },
]

function DashboardPage({ user }: { user: User }) {
  const navigate = useNavigate()
  const [dashboard, setDashboard] = useState<Dashboard | null>(null)
  const [dataError, setDataError] = useState('')
  const [active, setActive] = useState('Overview')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [showAdd, setShowAdd] = useState(false)
  const [showTco, setShowTco] = useState(false)
  const [toast, setToast] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [recommendation, setRecommendation] = useState('Select at least two suppliers to compare')

  const suppliers = useMemo(() => dashboard?.suppliers.map(toUiSupplier) ?? [], [dashboard])
  const filtered = useMemo(() => suppliers.filter((supplier) =>
    `${supplier.name} ${supplier.category} ${supplier.location}`.toLowerCase().includes(query.toLowerCase())), [query, suppliers])

  useEffect(() => {
    api.get<Dashboard>('/dashboard').then((response) => setDashboard(response.data)).catch(() => setDataError('Could not load workspace data. Please try again.'))
  }, [user])
  useEffect(() => {
    if (selected.length < 2) { setRecommendation('Select at least two suppliers to compare'); return }
    api.post<{ recommendation?: { reason: string } }>('/comparisons', { supplierIds: selected }).then((response) => setRecommendation(response.data.recommendation?.reason ?? 'No recommendation available')).catch(() => setRecommendation('Comparison data is unavailable'))
  }, [selected])

  const notify = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(''), 2600)
  }

  const toggleSupplier = (id: string) => {
    setSelected((current) => current.includes(id)
      ? current.filter((value) => value !== id)
      : current.length < 4 ? [...current, id] : current)
  }

  if (dataError) return <div className="auth-page"><div className="auth-card"><h2>SupplyIQ</h2><p>{dataError}</p><button className="primary-btn" onClick={() => window.location.reload()}>Retry</button></div></div>
  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="brand"><div className="brand-mark"><Boxes size={18} /></div><span>Supply<span className="brand-blue">IQ</span></span></div>
        <div className="workspace-switch"><div className="workspace-avatar">N</div><div><b>Northstar Industries</b><small>Workspace</small></div><ChevronDown size={15} /></div>
        <div className="nav-section">Workspace</div>
        <nav>{nav.map(({ label, icon: Icon }) => <button key={label} className={active === label ? 'active' : ''} onClick={() => { setActive(label); setSidebarOpen(false); if (label === 'Suppliers') navigate('/suppliers'); else if (label === 'Risk & compliance') navigate('/risk-assessments'); else if (label === 'Cost analysis') navigate('/tco-calculator'); else if (label === 'Overview') navigate('/dashboard'); else notify(`${label} is not available yet`) }}><Icon size={17} />{label}{label === 'Risk & compliance' && <span className="nav-count">3</span>}</button>)}</nav>
        <div className="nav-section">Manage</div>
        <nav><button onClick={() => notify('Reports are being prepared')}><BarChart3 size={17} />Reports</button><button onClick={() => notify('Settings opened')}><Settings size={17} />Settings</button></nav>
        <div className="sidebar-bottom"><div className="help-card"><Sparkles size={17} /><div><b>Need a hand?</b><small>Ask the AI assistant</small></div><ArrowUpRight size={14} /></div><div className="profile"><div className="profile-avatar">RK</div><div><b>Rohan Kapoor</b><small>Procurement lead</small></div><ChevronDown size={15} /></div></div>
      </aside>
      <main className="main">
        <header className="topbar"><button className="mobile-menu" onClick={() => setSidebarOpen(true)}><Menu size={20} /></button><div className="crumb">Workspace <span>/</span> <b>{active}</b></div><div className="top-actions"><div className="global-search"><Search size={16} /><input placeholder="Search anything..." /></div><button className="icon-btn" onClick={() => notify('You are all caught up')}><Bell size={18} /><i /></button><button className="quick-add" onClick={() => setShowAdd(true)}><Plus size={16} /> Add supplier</button></div></header>
        <div className="page">
          <div className="page-heading"><div><div className="eyebrow">FRIDAY, NOVEMBER 07, 2026</div><h1>Good morning, Rohan <span>✦</span></h1><p>Here’s what’s happening across your supply network.</p></div><div className="heading-actions"><button className="secondary-btn" onClick={() => setShowTco(true)}><CircleDollarSign size={16} /> Calculate TCO</button><button className="primary-btn" onClick={() => setShowAdd(true)}><Plus size={16} /> Add supplier</button></div></div>
          <section className="metric-grid">
            <Metric icon={<Users />} label="Total suppliers" value={String(dashboard?.metrics.totalSuppliers ?? 0)} trend="Live" note="from PostgreSQL" color="blue" />
            <Metric icon={<ShieldAlert />} label="High-risk suppliers" value={String(dashboard?.metrics.highRiskSuppliers ?? 0)} trend="Live" note="from PostgreSQL" color="orange" />
            <Metric icon={<Activity />} label="Avg. performance" value={String(dashboard?.metrics.averagePerformance ?? 0)} suffix="/100" trend="Live" note="from PostgreSQL" color="green" />
            <Metric icon={<CircleDollarSign />} label="Procurement spend" value={`$${(dashboard?.metrics.procurementSpend ?? 0).toLocaleString()}`} trend="Live" note="from procurement orders" color="purple" />
          </section>
          <div className="content-grid">
            <section className="panel trend-panel"><PanelHeader title="Performance overview" action="Historical data pending" /><div className="empty-state">Historical performance trends will appear after supplier performance records are added. Current supplier scores are available in the directory.</div></section>
            <section className="panel risk-panel"><PanelHeader title="Risk distribution" action="View all" onAction={() => setActive('Risk & compliance')} /><div className="risk-content"><div className="donut"><div><b>{dashboard?.metrics.totalSuppliers ?? 0}</b><small>suppliers</small></div></div><div className="risk-list"><RiskRow label="Low risk" count={String(dashboard?.riskDistribution.low ?? 0)} percent="—" color="green" /><RiskRow label="Medium risk" count={String(dashboard?.riskDistribution.medium ?? 0)} percent="—" color="yellow" /><RiskRow label="High risk" count={String(dashboard?.riskDistribution.high ?? 0)} percent="—" color="red" /></div></div><div className="risk-insight"><Sparkles size={15} /><span><b>Data note:</b> Risk counts are calculated from workspace suppliers.</span></div></section>
          </div>
          <section className="panel suppliers-panel"><div className="panel-title-row"><div><h2>Supplier directory</h2><p>Monitor and manage your supplier network.</p></div><button className="text-btn" onClick={() => setActive('Suppliers')}>View directory <ArrowUpRight size={15} /></button></div><div className="table-toolbar"><div className="table-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search suppliers..." /></div><div className="toolbar-actions"><button className="filter-btn">All categories <ChevronDown size={14} /></button><button className="filter-btn">Risk level <ChevronDown size={14} /></button></div></div><div className="table-wrap"><table><thead><tr><th>SUPPLIER</th><th>PERFORMANCE</th><th>RISK LEVEL</th><th>SPEND YTD</th><th>STATUS</th><th /></tr></thead><tbody>{filtered.slice(0, 5).map((supplier) => <tr key={supplier.id}><td><div className="supplier-cell"><div className="supplier-logo" style={{ background: supplier.color }}>{supplier.initials}</div><div><b>{supplier.name}</b><small>{supplier.category} · {supplier.location}</small></div></div></td><td><div className="score-cell"><div className="score-bar"><i style={{ width: `${supplier.score}%` }} /></div><b>{supplier.score}</b></div></td><td><span className={`pill ${supplier.risk.toLowerCase()}`}><i />{supplier.risk}</span></td><td><b>{supplier.spend}</b></td><td><span className={`status ${supplier.status === 'Action needed' ? 'danger' : supplier.status === 'Review due' ? 'warning' : ''}`}><i />{supplier.status}</span></td><td><button className="more-btn" onClick={() => notify(`${supplier.name} details opened`)}>•••</button></td></tr>)}</tbody></table></div></section>
          <section className="bottom-grid"><div className="panel compare-panel"><PanelHeader title="Supplier comparison" action="Open comparison" onAction={() => setActive('Suppliers')} /><p className="panel-subtitle">Select suppliers to generate a weighted recommendation.</p><div className="compare-selectors">{suppliers.slice(0, 4).map((supplier) => <button key={supplier.id} className={`compare-chip ${selected.includes(supplier.id) ? 'selected' : ''}`} onClick={() => toggleSupplier(supplier.id)}><span style={{ background: supplier.color }}>{supplier.initials}</span>{supplier.name.split(' ')[0]}{selected.includes(supplier.id) && <span className="check">✓</span>}</button>)}</div><div className="recommendation"><Sparkles size={18} /><div><small>SUPPLIER RECOMMENDATION</small><b>{recommendation}</b><p>Weighted using delivery, quality, consistency, and risk data.</p></div></div></div><div className="panel activity-panel"><PanelHeader title="Recent activity" action="View all" /><div className="activity-list"><ActivityItem icon={<Truck />} title="Database connected" detail="Workspace supplier data loaded" time="Now" color="blue" /><ActivityItem icon={<ShieldAlert />} title="Risk data synced" detail="Risk levels calculated from records" time="Now" color="orange" /><ActivityItem icon={<FileSearch />} title="Authentication active" detail={`${user.role} workspace session`} time="Now" color="purple" /></div></div></section>
        </div>
      </main>
      {showAdd && <Modal title="Add supplier" onClose={() => setShowAdd(false)}><SupplierForm onSaved={(message) => { setShowAdd(false); notify(message); api.get<Dashboard>('/dashboard').then((response) => setDashboard(response.data)) }} /></Modal>}
      {showTco && <Modal title="Total cost calculator" onClose={() => setShowTco(false)}><TcoForm onDone={(total) => { setShowTco(false); notify(`TCO calculated: $${total.toLocaleString()}`) }} /></Modal>}
      {toast && <div className="toast"><Sparkles size={16} />{toast}</div>}
    </div>
  )
}

function Metric({ icon, label, value, suffix, trend, note, color }: { icon: React.ReactNode; label: string; value: string; suffix?: string; trend: string; note: string; color: string }) { return <div className="metric-card"><div className={`metric-icon ${color}`}>{icon}</div><div className="metric-label">{label}</div><div className="metric-value">{value}<small>{suffix}</small></div><div className="metric-trend"><span className={trend.startsWith('-') && color !== 'orange' ? 'negative' : ''}>{trend}</span> {note}</div></div> }
function PanelHeader({ title, action, onAction }: { title: string; action: string; onAction?: () => void }) { return <div className="panel-title-row"><h2>{title}</h2><button className="panel-action" onClick={onAction}>{action} <ChevronDown size={14} /></button></div> }
function RiskRow({ label, count, percent, color }: { label: string; count: string; percent: string; color: string }) { return <div className="risk-row"><span><i className={`dot ${color}`} />{label}</span><b>{count}</b><small>{percent}</small></div> }
function ActivityItem({ icon, title, detail, time, color }: { icon: React.ReactNode; title: string; detail: string; time: string; color: string }) { return <div className="activity-item"><div className={`activity-icon ${color}`}>{icon}</div><div><b>{title}</b><small>{detail}</small></div><time>{time}</time></div> }
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) { return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" onMouseDown={(event) => event.stopPropagation()}><div className="modal-header"><h2>{title}</h2><button onClick={onClose}><X size={18} /></button></div>{children}</div></div> }
function LoginScreen({ error, onLogin }: { error: string; onLogin: (email: string, password: string) => Promise<void> }) {
  const [email, setEmail] = useState('rohan@northstar.example')
  const [password, setPassword] = useState('demo1234')
  const submit = (event: FormEvent) => { event.preventDefault(); void onLogin(email, password) }
  return <div className="auth-page"><form className="auth-card" onSubmit={submit}><div className="brand auth-brand"><div className="brand-mark"><Boxes size={18} /></div><span>Supply<span className="brand-blue">IQ</span></span></div><h1>Welcome back</h1><p>Sign in to your supplier intelligence workspace.</p><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required minLength={8} /></label>{error && <div className="form-error">{error}</div>}<button className="primary-btn full" type="submit">Sign in</button><small>Demo account: rohan@northstar.example / demo1234</small><Link className="auth-link" to="/register">Create a workspace account</Link></form></div>
}
function RegisterScreen({ onRegistered }: { onRegistered: (user: User) => void }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')
  const submit = async (event: FormEvent) => {
    event.preventDefault()
    if (form.password !== form.confirmPassword) { setError('Passwords do not match'); return }
    try {
      const response = await api.post<{ user: User }>('/auth/register', form)
      onRegistered(response.data.user)
    } catch (requestError) {
      if (axios.isAxiosError<{ error?: string; details?: Array<{ message: string }> }>(requestError)) {
        const details = requestError.response?.data?.details?.map((detail) => detail.message).join(', ')
        setError(details || requestError.response?.data?.error || 'Unable to reach the registration service')
      } else {
        setError('Unable to reach the registration service')
      }
    }
  }
  return <div className="auth-page"><form className="auth-card" onSubmit={submit}><div className="brand auth-brand"><div className="brand-mark"><Boxes size={18} /></div><span>Supply<span className="brand-blue">IQ</span></span></div><h1>Create workspace</h1><p>Start managing supplier intelligence securely.</p>{(['name', 'email', 'password', 'confirmPassword'] as const).map((key) => <label key={key}>{key === 'name' ? 'Full name' : key === 'confirmPassword' ? 'Confirm password' : key[0].toUpperCase() + key.slice(1)}<input type={key.includes('password') ? 'password' : key === 'email' ? 'email' : 'text'} value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} required minLength={key.includes('password') ? 8 : undefined} /></label>)}{error && <div className="form-error">{error}</div>}<button className="primary-btn full" type="submit">Create account</button><Link className="auth-link" to="/login">Already have an account? Sign in</Link></form></div>
}
function SupplierForm({ onSaved }: { onSaved: (message: string) => void }) {
  const [form, setForm] = useState({ name: '', companyName: '', email: '', location: '', industry: 'Manufacturing', categories: 'Electronics' })
  const submit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      await api.post('/suppliers', { ...form, averageDeliveryDays: 10, onTimeRate: 85, qualityRating: 85, priceConsistency: 85 })
      onSaved('Supplier saved to PostgreSQL')
    } catch { onSaved('Supplier could not be saved') }
  }
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }))
  return <form onSubmit={submit}><div className="form-grid">{(['name', 'companyName', 'email', 'location'] as const).map((key) => <label key={key}>{key === 'name' ? 'Supplier name' : key === 'companyName' ? 'Company name' : key[0].toUpperCase() + key.slice(1)}<input value={form[key]} onChange={(event) => update(key, event.target.value)} required /></label>)}<label>Industry<input value={form.industry} onChange={(event) => update('industry', event.target.value)} required /></label><label>Category<input value={form.categories} onChange={(event) => update('categories', event.target.value)} required /></label></div><button className="primary-btn full" type="submit">Save supplier</button></form>
}
function TcoForm({ onDone }: { onDone: (total: number) => void }) {
  const [values, setValues] = useState({ product: 10000, transportation: 850, taxes: 1800, storage: 300, inspection: 150, expectedDefect: 220, delay: 400, other: 0 })
  const total = Object.values(values).reduce((a, b) => a + Number(b), 0)
  const save = async () => { const response = await api.post<{ total: number }>('/tco', values); onDone(response.data.total) }
  return <><p className="modal-copy">Estimate the true landed cost beyond the unit price.</p><div className="tco-fields">{Object.entries(values).map(([key, value]) => <label key={key}>{key[0].toUpperCase() + key.slice(1)}<input type="number" min="0" value={value} onChange={(event) => setValues({ ...values, [key]: Number(event.target.value) })} /></label>)}</div><div className="tco-total"><span>Total procurement cost</span><b>${total.toLocaleString()}</b></div><button className="primary-btn full" onClick={() => void save()}>Calculate with API</button></>
}

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  useEffect(() => { api.get<{ user: User }>('/auth/me').then((response) => setUser(response.data.user)).catch(() => undefined).finally(() => setLoading(false)) }, [])
  if (loading) return <div className="auth-page"><div className="auth-card">Loading your workspace…</div></div>
  return <BrowserRouter><Routes>
    <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <LoginScreen error={authError} onLogin={async (email, password) => { try { const response = await api.post<{ user: User }>('/auth/login', { email, password }); setUser(response.data.user); setAuthError('') } catch (requestError) { if (axios.isAxiosError<{ error?: string }>(requestError)) setAuthError(requestError.response?.data?.error ?? 'Cannot reach the API. Start the server with npm run dev.') ; else setAuthError('Cannot reach the API. Start the server with npm run dev.') } }} />} />
    <Route path="/register" element={user ? <Navigate to="/dashboard" replace /> : <RegisterScreen onRegistered={setUser} />} />
    <Route element={<Protected user={user} />}>
      <Route path="/dashboard" element={<DashboardPage user={user!} />} />
      <Route path="/suppliers" element={<SuppliersPage />} />
      <Route path="/suppliers/:id" element={<SupplierDetailsPage />} />
      <Route path="/comparison" element={<SimplePage title="Supplier comparison" description="Select suppliers and review transparent weighted recommendations." />} />
      <Route path="/tco-calculator" element={<TcoPage />} />
      <Route path="/tco-history" element={<SimplePage title="TCO history" description="Saved cost breakdown history will appear here once order-linked calculations are enabled." />} />
      <Route path="/procurement-orders" element={<SimplePage title="Procurement orders" description="Create and track purchase orders from approved supplier comparisons." />} />
      <Route path="/risk-assessments" element={<SimplePage title="Risk assessments" description="Review evidence-based supplier risk assessments." />} />
      <Route path="/profile" element={<ProfilePage user={user!} onLogout={() => { void api.post('/auth/logout'); setUser(null) }} />} />
    </Route>
    <Route path="/" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
    <Route path="*" element={<SimplePage title="Page not found" description="The requested SupplyIQ page does not exist." />} />
  </Routes></BrowserRouter>
}

function Protected({ user }: { user: User | null }) {
  return user ? <OutletLayout /> : <Navigate to="/login" replace />
}
function OutletLayout() {
  return <div className="route-page"><header className="route-header"><Link to="/dashboard" className="brand"><div className="brand-mark"><Boxes size={18} /></div><span>Supply<span className="brand-blue">IQ</span></span></Link><nav className="route-nav"><Link to="/dashboard">Dashboard</Link><Link to="/suppliers">Suppliers</Link><Link to="/comparison">Comparison</Link><Link to="/tco-calculator">TCO</Link><Link to="/procurement-orders">Orders</Link><Link to="/risk-assessments">Risk</Link><Link to="/profile">Profile</Link></nav></header><main className="route-content"><Outlet /></main></div>
}
function SuppliersPage() {
  const [items, setItems] = useState<ApiSupplier[]>([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  useEffect(() => { api.get<{ items: ApiSupplier[] }>(`/suppliers?limit=100&search=${encodeURIComponent(query)}`).then((response) => setItems(response.data.items)).catch(() => setError('Unable to load suppliers')) }, [query])
  return <section className="route-panel"><div className="route-heading"><div><div className="eyebrow">WORKSPACE</div><h1>Supplier directory</h1><p>Search and inspect suppliers stored in PostgreSQL.</p></div><Link className="primary-btn" to="/dashboard">Back to dashboard</Link></div><div className="table-toolbar"><div className="table-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search suppliers..." /></div></div>{error ? <div className="empty-state">{error}</div> : <div className="table-wrap"><table><thead><tr><th>SUPPLIER</th><th>CATEGORY</th><th>DELIVERY</th><th>QUALITY</th><th>RISK</th><th /></tr></thead><tbody>{items.map((supplier) => <tr key={supplier.id}><td><b>{supplier.name}</b><small>{supplier.companyName} · {supplier.location}</small></td><td>{supplier.categories}</td><td>{supplier.onTimeRate}%</td><td>{supplier.qualityRating}%</td><td>{supplier.riskLevel}</td><td><Link className="text-btn" to={`/suppliers/${supplier.id}`}>View</Link></td></tr>)}</tbody></table></div>}</section>
}
function SupplierDetailsPage() {
  const location = useLocation()
  const id = location.pathname.split('/').pop()
  const [supplier, setSupplier] = useState<ApiSupplier | null>(null)
  useEffect(() => { if (id) api.get<ApiSupplier>(`/suppliers/${id}`).then((response) => setSupplier(response.data)).catch(() => setSupplier(null)) }, [id])
  return <section className="route-panel">{supplier ? <><div className="route-heading"><div><div className="eyebrow">SUPPLIER PROFILE</div><h1>{supplier.name}</h1><p>{supplier.companyName} · {supplier.location}</p></div><Link className="secondary-btn" to="/suppliers">Back to directory</Link></div><div className="detail-grid"><Metric icon={<Truck />} label="On-time delivery" value={`${supplier.onTimeRate}%`} trend="Recorded" note="supplier data" color="blue" /><Metric icon={<Activity />} label="Quality rating" value={`${supplier.qualityRating}%`} trend="Recorded" note="supplier data" color="green" /><Metric icon={<ShieldAlert />} label="Risk level" value={supplier.riskLevel} trend="Recorded" note="assessment data" color="orange" /></div></> : <div className="empty-state">Supplier not found or unavailable.</div>}</section>
}
function TcoPage() { const [total, setTotal] = useState<number | null>(null); return <section className="route-panel"><div className="route-heading"><div><div className="eyebrow">COST ANALYSIS</div><h1>TCO calculator</h1><p>Calculate landed procurement cost using the validated backend formula.</p></div></div><div className="panel tco-route-card"><TcoForm onDone={setTotal} />{total !== null && <div className="success-note">Calculation saved for this session: ${total.toLocaleString()}</div>}</div></section> }
function ProfilePage({ user, onLogout }: { user: User; onLogout: () => void }) { return <section className="route-panel"><div className="route-heading"><div><div className="eyebrow">ACCOUNT</div><h1>Your profile</h1><p>Workspace identity and access information.</p></div><button className="secondary-btn" onClick={onLogout}>Log out</button></div><div className="profile-details"><b>{user.name}</b><span>{user.email}</span><span>{user.role} · {user.workspaceId}</span></div></section> }
function SimplePage({ title, description }: { title: string; description: string }) { return <section className="route-panel"><div className="route-heading"><div><div className="eyebrow">SUPPLYIQ WORKSPACE</div><h1>{title}</h1><p>{description}</p></div></div><div className="empty-state">This workflow is scaffolded and ready for its persistence API.</div></section> }

export default App
