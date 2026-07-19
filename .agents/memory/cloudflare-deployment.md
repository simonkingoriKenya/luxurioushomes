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
bun run build
CLOUDFLARE_API_TOKEN=$CLOUDFLARE_API_KEY bunx wrangler pages deploy dist --project-name luxurioushomes --commit-dirty=true
```

No wrangler.json patching needed (cloudflare-pages preset handles output correctly).

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
