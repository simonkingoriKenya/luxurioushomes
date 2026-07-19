---
name: Cloudflare Deployment
description: How to build and deploy this TanStack Start SSR app to Cloudflare Workers, including the wrangler config workaround needed every deploy.
---

# Cloudflare Deployment

## Live URL
https://luxurioushomes.broad-tooth-82ac.workers.dev

## Deploy process (must follow every time)
1. `bun run build`
2. Overwrite `.output/server/wrangler.json` with the clean config below
3. Delete `.wrangler/deploy/config.json`
4. `cd .output/server && CLOUDFLARE_API_TOKEN=$CLOUDFLARE_API_KEY bunx wrangler deploy`

## Clean wrangler.json for .output/server/
```json
{
  "compatibility_date": "2024-09-23",
  "name": "luxurioushomes",
  "compatibility_flags": ["nodejs_compat"],
  "main": "index.mjs",
  "assets": { "binding": "ASSETS", "directory": "../public" },
  "no_bundle": true,
  "rules": [{ "type": "ESModule", "globs": ["**/*.mjs", "**/*.js"] }]
}
```

**Why:** Nitro's cloudflare-module preset regenerates wrangler.json with `pages_build_output_dir` (Pages-only) and `assets.binding: "ASSETS"` (reserved in Pages). Deploying as a Worker via `wrangler deploy` works — but the config must be patched after every build.

## Auth
- Secret: `CLOUDFLARE_API_KEY` → pass as `CLOUDFLARE_API_TOKEN`
- Account: Info@migradia.com, ID: 4a8511d021c1afe4a6b7f14975b73e53
- Token needs **Workers Scripts: Edit** permission

## OG image
Absolute URL fallback in __root.tsx: https://luxurioushomes.broad-tooth-82ac.workers.dev/og-image.jpg
Override with VITE_APP_URL env var if domain changes.
