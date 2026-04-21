<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

Instructions for coding agents working in this repository subtree (`client/`). Keep changes small, typed, and easy to review.

## Scope

These instructions apply to everything under `client/`.

## Project Snapshot

- Stack: Next.js (App Router), React 19, TypeScript 5, ESLint 9, Prettier 3.
- Goal: portfolio site with clean UI, strong content structure, and maintainable frontend code.

## Source of Truth Structure

- `src/app` - routes, layout, and page composition.
- `src/components` - reusable UI components.
- `src/data` - static content/config for sections and cards.
- `src/lib` - shared helpers and utility functions.
- `src/types` - shared domain and UI types.
- `public/` - static assets (images, icons, documents).

When adding logic, prefer this separation over putting everything in `page.tsx`.

## Setup and Commands

Run all commands from `client/`.

- Install deps: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Start built app: `npm run start`
- Format write: `npx prettier --write .`
- Format check: `npx prettier --check .`

## Code Style and Architecture Rules

- TypeScript first. Keep `strict` compatibility and avoid `any` unless unavoidable.
- Reuse existing types from `src/types`; add new types there when broadly reused.
- Keep components focused on one responsibility.
- Keep static/business content in `src/data`, not inside UI components.
- Keep utility logic in `src/lib`.
- Prefer composition over large monolithic components.
- Use the existing `@/*` import alias for `src/*` imports.
- Follow formatting in `.prettierrc` and lint rules in `eslint.config.mjs`.

## Change Policy

- Do not rewrite unrelated files.
- Preserve existing behavior unless a change request requires otherwise.
- For UI changes, keep desktop and mobile behavior intact.
- For content updates, keep claims factual and avoid inventing metrics.

## Validation Before Handoff

After code edits, run:

1. `npm run lint`
2. `npm run build`

If either command fails, fix issues before handoff or clearly report blockers.

## Notes for Next.js Work

- Respect App Router conventions in `src/app`.
- Check current Next.js docs bundled in `node_modules/next/dist/docs/` when unsure.
- Avoid deprecated APIs and heed runtime/build warnings.
