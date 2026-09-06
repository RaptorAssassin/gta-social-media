<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# GTA Social Media — Agent Guide

Stack: Next.js 16.3.4 (App Router) + React 19 + TypeScript 5 + Tailwind CSS 4 + `motion` + `lucide-react`. Single package; `pnpm-workspace.yaml` only restricts `allowBuilds` (no workspaces). `CLAUDE.md` just re-exports this file.

## Commands (use pnpm — `packageManager` is `pnpm@11.24.0`)

- `pnpm dev` — dev server at http://localhost:3000 (Turbopack). Auto-regenerates the `nextjs-agent-rules` block above — do not delete it.
- `pnpm build` — `next build`
- `pnpm start` — `next start` (requires build)
- `pnpm lint` — `eslint` (flat config in `eslint.config.mjs` using `eslint-config-next/core-web-vitals` + `typescript`; ignores `.next/**`, `out/**`, `build/**`, `next-env.d.ts`)
- Typecheck: `pnpm exec tsc --noEmit` (no `typecheck` script; `tsconfig.json` has `noEmit:true`)
- Format: Prettier via `prettier-plugin-tailwindcss` (`.prettierrc`: no semi, singleQuote, tabWidth 2) — run `pnpm exec prettier --write .`
- No test runner, CI workflows, or `opencode.json` configured.

## Architecture

- Entrypoints: `app/layout.tsx` (root, Geist fonts, `h-full` html) → `app/(phone)/layout.tsx` (shared `Phone` shell for all routes in group) → `app/(phone)/page.tsx` (`<Feed />`) and `app/(phone)/create/page.tsx`.
- Route group `app/(phone)/` is layout-only — strips `phone` from URL but wraps children in `components/phone.tsx` chrome (aspect 390/844, status bar with live clock).
- Path alias `@/*` → `./*` per `tsconfig.json:21` (e.g. `@/components/phone`, `@/lib/types`).
- Key modules: `components/feed.tsx` + `components/post.tsx` feed UI, `components/phone.tsx` shell, `components/image-editor.tsx` (stub), `lib/types.ts` (`Post`, `Comment`), `lib/animations.ts` (shared `motion` variants: `buttonMotionProps`, `buttonVariants`, `iconVariants`), `app/globals.css` (`@import "tailwindcss"` + CSS vars, no `@tailwind` directives — Tailwind 4 via `@tailwindcss/postcss` in `postcss.config.mjs`).
- Static assets: `public/images/app-background.png`, `public/images/example-post.jpg`.
- Generated/ignored: `.next/`, `next-env.d.ts` (do not edit; gitignored). `next.config.ts` is currently empty/default.

## Quirks & Gotchas

- Tailwind 4: theme vars defined in `app/globals.css` via `@theme inline`; dark-mode block is commented out. Use class-based Tailwind, not manual CSS for layout.
- `app/(phone)/create/page.tsx` is a `'use client'` component with `localStorage` username, `URL.createObjectURL` for preview (revoke on replace), and placeholder image editor (`@unlayer/react-image-editor` installed but not wired — see `TODO` at line ~157).
- `components/phone.tsx:24` has `eslint-disable react-hooks/set-state-in-effect` for clock init — keep the suppression.
- `pnpm-lock.yaml` is source of truth; `next-env.d.ts` references `.next/types` and `.next/dev/types`.
