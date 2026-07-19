---
name: Cloudflare Deployment
description: How to build and deploy this TanStack Start SSR app to Cloudflare Pages (single deployment, no Workers).
---

# Cloudflare Deployment

## Live URL
https://luxurioushomes.pages.dev

## Deployment target
**Cloudflare Pages** (NOT Workers). The old Workers deployment (broad-tooth-82ac.workers.dev) was deleted.

## Nitro preset
`cloudflare-pages` — set in `vite.config.ts` under `nitro: { preset: "cloudflare-pages" }`.
Build output goes to `dist/` with `dist/_worker.js/` for SSR and `dist/` for static assets.

## Deploy process (every time)
```bash
bash scripts/deploy.sh
```

Script does: build → append HTML no-cache rule to dist/_headers → deploy with --branch main.
**Always use --branch main** — without it wrangler creates a preview deployment and luxurioushomes.pages.dev stays on the old version.

## Architecture — ONE deployment, no separate Worker
- Nitro cloudflare-pages preset outputs dist/ containing:
  - dist/              → static assets (served directly by Pages, immutable cache)
  - dist/_worker.js/   → SSR Worker code BUNDLED INSIDE Pages (not a separate Worker script)
  - dist/_routes.json  → tells Pages which requests hit Worker vs static
- There is no separate Cloudflare Worker. Do not use wrangler deploy.

## HTML caching fix
- Cloudflare edge caches HTML responses with no Cache-Control, making deploys look invisible.
- Fix is in src/server.ts: withNoCacheForHtml() injects Cache-Control: no-store on every text/html response.
- _headers (static file headers) does NOT affect Worker/SSR responses — must be done in server code.

## Node.js version requirement
wrangler requires Node.js ≥ 22. Module `nodejs-22` must be installed in the Replit environment.

## Auth
- Secret: `CLOUDFLARE_API_KEY` → pass as `CLOUDFLARE_API_TOKEN`
- Account: Info@migradia.com, ID: 4a8511d021c1afe4a6b7f14975b73e53

## Cloudflare bindings (set on Pages project via API)
- **D1** binding `DB` → `migradia-db` (ID: `29bf4482-26c6-4d61-a90b-7d68563711d5`)
  - Tables prefixed `lh_`: `lh_properties`, `lh_inquiries`, `lh_gallery_images`
- **R2** binding `STORAGE` → bucket `luxurioushomes-media`

**Why:** Bindings are configured on the Pages project (not in wrangler.toml) via the CF Pages API PATCH endpoint.

## OG image
Absolute URL fallback in __root.tsx: https://luxurioushomes.broad-tooth-82ac.workers.dev/og-image.jpg
**TODO:** Update to https://luxurioushomes.pages.dev/og-image.jpg
