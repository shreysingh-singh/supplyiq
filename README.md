# SupplyIQ

SupplyIQ is an AI-ready supplier intelligence platform for procurement teams.

## Current implementation

- Responsive enterprise dashboard with the existing SupplyIQ visual design
- Prisma 7.10.1 + PostgreSQL 17 persistence through `@prisma/adapter-pg`
- Cookie-based JWT authentication and workspace-scoped authorization
- Supplier CRUD with search, pagination, filtering, and sorting
- Database-backed dashboard statistics
- Deterministic supplier comparison scoring
- Validated TCO calculation endpoint
- Idempotent demo seed data

## Run locally

```bash
cd server
npm install
# Create .env from ../.env.example and set DATABASE_URL and JWT_SECRET.
npx prisma generate
npx prisma migrate dev
npm run db:seed
npm run dev
```

In another terminal:

```bash
cd client
npm install
npm run dev
```

The client runs on the Vite URL (usually `http://localhost:5173`) and the API runs on `http://localhost:4000`.

### Verification

```bash
cd server
npx prisma validate
npx prisma migrate status
npm run build
npm run db:seed
```

Demo account: `rohan@northstar.example` / `demo1234`.

The client uses `VITE_API_URL` when provided; otherwise it defaults to `http://localhost:4000/api`.
