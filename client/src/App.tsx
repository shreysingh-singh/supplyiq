import { useEffect, useMemo, useState, type FormEvent } from 'react'
import {
  Activity, ArrowUpRight, BarChart3, Bell, Boxes, ChevronDown, CircleDollarSign,
  FileSearch, LayoutDashboard, Menu, Plus, Search, Settings,
  ShieldAlert, Sparkles, Truck, Users, X
} from 'lucide-react'
import './App.css'
import { api, type Dashboard, type Supplier as ApiSupplier, type User } from './services/api'

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

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [authError, setAuthError] = useState('')
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
    api.get<{ user: User }>('/auth/me').then((response) => setUser(response.data.user)).catch(() => undefined).finally(() => setAuthLoading(false))
  }, [])
  useEffect(() => {
    if (!user) return
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

  if (authLoading) return <div className="auth-page"><div className="auth-card">Loading your workspace…</div></div>
  if (!user) return <LoginScreen error={authError} onLogin={async (email, password) => {
    try { const response = await api.post<{ user: User }>('/auth/login', { email, password }); setUser(response.data.user); setAuthError('') } catch { setAuthError('Invalid email or password') }
  }} />
  if (dataError) return <div className="auth-page"><div className="auth-card"><h2>SupplyIQ</h2><p>{dataError}</p><button className="primary-btn" onClick={() => window.location.reload()}>Retry</button></div></div>
  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="brand"><div className="brand-mark"><Boxes size={18} /></div><span>Supply<span className="brand-blue">IQ</span></span></div>
        <div className="workspace-switch"><div className="workspace-avatar">N</div><div><b>Northstar Industries</b><small>Workspace</small></div><ChevronDown size={15} /></div>
        <div className="nav-section">Workspace</div>
        <nav>{nav.map(({ label, icon: Icon }) => <button key={label} className={active === label ? 'active' : ''} onClick={() => { setActive(label); setSidebarOpen(false) }}><Icon size={17} />{label}{label === 'Risk & compliance' && <span className="nav-count">3</span>}</button>)}</nav>
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
            <Metric icon={<CircleDollarSign />} label="Procurement spend" value="$—" trend="Pending" note="orders not configured" color="purple" />
          </section>
          <div className="content-grid">
            <section className="panel trend-panel"><PanelHeader title="Performance overview" action="Last 6 months" /><div className="chart-legend"><span><i className="dot blue" />Performance score</span><span><i className="dot green" />On-time delivery</span></div><div className="line-chart"><div className="y-labels"><span>100</span><span>80</span><span>60</span><span>40</span><span>20</span></div><svg viewBox="0 0 640 220" preserveAspectRatio="none"><defs><linearGradient id="fillBlue" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#2563eb" stopOpacity=".16" /><stop offset="100%" stopColor="#2563eb" stopOpacity="0" /></linearGradient></defs><path className="area" d="M0,137 C50,120 70,130 110,105 S180,115 220,92 S280,80 330,95 S390,70 440,65 S500,80 550,53 S610,45 640,37 L640,220 L0,220Z" /><path className="line blue-line" d="M0,137 C50,120 70,130 110,105 S180,115 220,92 S280,80 330,95 S390,70 440,65 S500,80 550,53 S610,45 640,37" /><path className="line green-line" d="M0,153 C50,148 70,154 110,131 S180,142 220,120 S280,112 330,122 S390,101 440,96 S500,110 550,86 S610,82 640,72" /></svg><div className="x-labels"><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span></div></div></section>
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
  return <div className="auth-page"><form className="auth-card" onSubmit={submit}><div className="brand auth-brand"><div className="brand-mark"><Boxes size={18} /></div><span>Supply<span className="brand-blue">IQ</span></span></div><h1>Welcome back</h1><p>Sign in to your supplier intelligence workspace.</p><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required minLength={8} /></label>{error && <div className="form-error">{error}</div>}<button className="primary-btn full" type="submit">Sign in</button><small>Demo account is prefilled for local development.</small></form></div>
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
  const save = async () => { const response = await api.post<{ total: number }>('/tco/calculate', values); onDone(response.data.total) }
  return <><p className="modal-copy">Estimate the true landed cost beyond the unit price.</p><div className="tco-fields">{Object.entries(values).map(([key, value]) => <label key={key}>{key[0].toUpperCase() + key.slice(1)}<input type="number" min="0" value={value} onChange={(event) => setValues({ ...values, [key]: Number(event.target.value) })} /></label>)}</div><div className="tco-total"><span>Total procurement cost</span><b>${total.toLocaleString()}</b></div><button className="primary-btn full" onClick={() => void save()}>Calculate with API</button></>
}

export default App
