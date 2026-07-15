# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Full-stack CRUD app for scheduling vet appointments — React + TanStack Query on the frontend, Express + SQLite (raw SQL) on the backend. No ORM, no monorepo tooling. `backend/` and `frontend/` are independent pnpm packages (no workspace root linking them) with separate lockfiles.

## Commands

Backend (`backend/`):
- `pnpm dev` — run the server with nodemon (`server.js`, port 3000)

Frontend (`frontend/`):
- `pnpm dev` — Vite dev server (port 5173)
- `pnpm build` — typecheck (`tsc -b`) then `vite build`
- `pnpm lint` — ESLint
- `pnpm preview` — preview the production build

There is no test runner configured in either package yet.

## Architecture

- **Backend**: plain Express (v5) using CommonJS (`require`), not raw `fetch`-friendly SQLite via `better-sqlite3`. No ORM — queries are meant to be raw SQL, organized (per `README.md`'s intended layout) under `backend/db/queries/*.js`, with routes under `backend/routes/*.js` and schema in `backend/db/schema.sql`. This structure is aspirational/in-progress — check what actually exists under `backend/` before assuming a file is present.
- **CORS**: frontend (5173) and backend (3000) are different origins during dev, so the backend enables `cors()` globally. In production, serving both from the same origin removes the need for this — keep that in mind if origin-restricting CORS later.
- **Frontend**: Vite + React 19 + TypeScript, Chakra UI v3 (+ `next-themes` for color mode) for components, Zustand for client state, TanStack Query for server state (per README's intended `src/api/` and `src/hooks/` layout — not yet scaffolded). Path alias `@/*` → `frontend/src/*` (configured in both `vite.config.ts` and `tsconfig.app.json` — keep them in sync if changed).
- Known pnpm build-script gotcha: `better-sqlite3` needs its build script approved — run `pnpm approve-builds` in `backend/` if you see `ERR_PNPM_IGNORED_BUILDS`.
