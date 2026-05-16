# Project Overview

`1dentaire-verde` is a fictional dental-clinic portfolio demo for Clinica Dentaire Verde in Bucharest, Romania. The goal is to present dentistry as calm, trustworthy, and human rather than sterile or salesy. The site is meant for prospective patients, especially adults, parents, teenagers, and anxious visitors who need clarity, warmth, and visible care before booking.

The work here should preserve the editorial, image-led landing page style, the restrained clinic palette, and the practical accessibility choices that make the demo feel believable.

# Tech Stack

- Next.js 16.2.4 with the App Router
- React 19.2.4 and React DOM 19.2.4
- TypeScript
- Tailwind CSS 4
- Global CSS with design tokens and animations in `app/globals.css`
- `next/font/google` for Poppins, Open Sans, and Roboto
- `next/image` for remote photography
- ESLint 9 with `eslint-config-next`
- Node.js test runner via `node --test`

# Architecture & Structure

- `app/layout.tsx` defines the root layout, metadata, font variables, and the skip link.
- `app/page.tsx` is the single public route and contains the full landing page composition.
- `app/mobile-menu.tsx` is a client-only component for the responsive navigation drawer.
- `app/globals.css` holds the design system tokens, motion, overlays, focus styles, and utility classes.
- `app/favicon.ico` is the app icon.
- `next.config.ts` configures remote image loading and image qualities.
- `tests/page-regressions.test.mjs` contains regression checks for content, accessibility, and motion behavior.
- `public/` stores the default static assets shipped with the starter.
- `plans/` and `docs/plans/` are reference material for the demo's design and replication history.
- `README.md`, `PRODUCT.md`, and `DESIGN.md` explain the brand, audience, and visual direction.

The root is intentionally small. There is no separate component library yet, so changes usually land in the existing `app/` files plus targeted tests.

# Code Style & Conventions

- Use TypeScript and React function components.
- Keep formatting consistent with the existing code: 2-space indentation, double quotes, trailing semicolons, and utility-first class names.
- Prefer semantic HTML, accessible labels, and clear landmark structure over div-heavy markup.
- Keep the Romanian copy tone calm, direct, and human. Avoid marketing fluff.
- Use `next/image` for external photography and keep alt text meaningful or intentionally empty when the image is decorative.
- Prefer CSS variables and existing utility tokens before adding new raw colors or one-off styles.
- Keep motion subtle and user-controllable; if something auto-animates, provide a pause or reduce-motion path.
- Keep edits tightly scoped. Do not refactor unrelated layout, copy, or styling while solving a focused task.
- Do not edit build output or dependencies directly: `/.next`, `/node_modules`, and lockfile changes should only happen when the task truly requires them.

# Build, Run & Test Commands

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

```bash
npm test
```

```bash
npm run start
```

# Agent Workflow Rules

1. Read this file, especially the failure log, before starting any non-trivial task.
2. Read the relevant Next.js docs in `node_modules/next/dist/docs/` before changing framework conventions, routing, layouts, image loading, or other Next-specific behavior.
3. Make the smallest change that solves the task, and prefer the project's existing patterns over inventing new ones.
4. After code changes, run the relevant checks before handing work back:
   - always run `npm run lint`
   - always run `npm test`
   - run `npm run build` when the change touches routing, rendering, shared layout, or styling that could affect production output
5. If a change affects visual behavior, verify the impacted page in the browser when possible.
6. Update the failure log after any non-trivial task that fails on the first attempt, even if the final result is resolved later.
7. Never delete or rewrite old failure-log entries; append a new entry or update the status of the existing one if the same issue is later resolved.
8. Avoid touching `/.next` or `/node_modules`. Treat `plans/` and `docs/plans/` as reference unless the task explicitly asks to update them.
9. If you are unsure whether a change belongs in code, docs, or planning notes, pause and choose the least invasive path.

# ⚠️ Failure Log & Lessons Learned

Before starting any task, read this section in full.

After completing or failing any non-trivial task, append an entry using exactly this format:

---
### [Short description of the task or problem]
- **What was attempted:** [describe the approach(es) tried]
- **What failed and why:** [be specific - error messages, wrong assumptions, edge cases hit]
- **What worked (if resolved):** [exact solution or workaround]
- **Status:** RESOLVED ✅ | UNRESOLVED ❌
---

Rules for this section:

- Add a new entry every time you fail on the first attempt at something.
- Never delete old entries; they are institutional memory.
- If a problem is later resolved by a different agent, update the existing entry's status and add the solution.
- Keep entries factual and terse so future agents can scan them quickly.
- If there are no entries yet, leave the section intact and add the first entry the moment a real failure happens.

---
### Dev server certificate and launch debugging
- **What was attempted:** Reproduced `npm run dev`, opened the local page, and changed scripts to pass `--use-system-ca` directly through `node node_modules/next/dist/bin/next`.
- **What failed and why:** The first PowerShell `Start-Process` attempt used the same stdout/stderr log file and failed; the second used `npm` instead of `npm.cmd` and failed on Windows; direct Next binary invocation fixed font certificate fetches but triggered intermittent Turbopack `Next.js package not found` panics.
- **What worked (if resolved):** Set `NODE_OPTIONS=--use-system-ca` while preserving the normal `next dev` / `next build` entrypoint, and added the missing image quality allowlist entry.
- **Status:** RESOLVED ✅
---

---
### Turbopack dev panic after successful page loads
- **What was attempted:** Read the panic log, checked Next.js CLI/Turbopack docs in `node_modules`, verified all remote Unsplash URLs with HEAD requests, and reproduced repeated local page loads with `next dev --webpack`.
- **What failed and why:** The user-facing failure looked image-related because it happened after `GET /`, but the panic log said `Next.js package not found` while building the app endpoint through Turbopack resolver state. A first PowerShell image-check command also failed because the pipeline was placed after a malformed inline `foreach`.
- **What worked (if resolved):** Pin `npm run dev` and `npm run build` to `--webpack`, remove the custom `turbopack.root` override, and add a regression test guarding those choices.
- **Status:** RESOLVED ✅
---

---
### Local visual QA port collision
- **What was attempted:** Started `npm run dev` on localhost port 3000 for browser verification after the generated media update.
- **What failed and why:** The dev server failed with `listen EADDRINUSE: address already in use :::3000` because another process already owned port 3000.
- **What worked (if resolved):** Restarted the dev server on port 3001, then verified the built app with `next start --port 3002` to avoid dev-overlay noise.
- **Status:** RESOLVED ✅
---
