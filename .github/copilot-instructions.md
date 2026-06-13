# Project Guidelines

## Code Style
- TypeScript strict mode, ES2022 target, no semicolons, single quotes, trailing commas
- Use path aliases `@/` for src-relative imports
- Import order: React/framework, third-party, local, types
- Tailwind CSS v4 utility-first styling
- PascalCase for components, camelCase for hooks/files

## Architecture
- TanStack Start full-stack React framework with file-based routing
- Supports SSR, SPA, and streaming modes
- TanStack Query for data fetching, TanStack DB Collections with Zod for local state
- Server functions via `createServerFn` for type-safe API calls
- Sentry instrumentation for client/server error tracking

## Build and Test
- `pnpm dev`: Start dev server with Sentry and dotenv
- `pnpm build`: Vite build for Cloudflare Workers
- `pnpm deploy`: Build and deploy to Cloudflare
- `pnpm lint`: ESLint with TanStack config
- `pnpm format`: Prettier formatting
- `pnpm check`: Combined lint and format
- `pnpm test`: Vitest (currently no tests)

## Conventions
- Demo files prefixed with `demo.` (remove before production)
- Routes in `src/routes/` with kebab-case paths
- Environment variables: `VITE_` for client, `.env.local` for server
- Wrap server operations in `Sentry.startSpan` for tracing
- Use live queries for reactive UI updates