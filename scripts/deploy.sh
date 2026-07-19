#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Luxurious Homes — Cloudflare Pages deploy script
#
# Architecture (ONE deployment, no separate Worker):
#   - Nitro cloudflare-pages preset bundles everything into dist/
#   - dist/                  → static assets (images, JS, CSS)
#   - dist/_worker.js/       → SSR Worker code (bundled INTO Pages, not separate)
#   - dist/_routes.json      → tells Pages which requests go to Worker vs static
#
# Deploy target: luxurioushomes.pages.dev  (--branch main = production)
#
# Usage:  bash scripts/deploy.sh
# ─────────────────────────────────────────────────────────────────────────────
set -e

echo "▶ Building…"
bun run build

# Append HTML cache headers so Cloudflare's edge never caches SSR HTML.
# /assets/* stays immutable (hashed filenames). Everything else must not be cached.
cat >> dist/_headers << 'HEADERS'

# HTML — never cache at the edge (SSR output changes on every deploy)
/*
  Cache-Control: no-store, no-cache, must-revalidate
  X-Content-Type-Options: nosniff
HEADERS

echo "▶ Deploying to production (luxurioushomes.pages.dev)…"
CLOUDFLARE_API_TOKEN=$CLOUDFLARE_API_KEY bunx wrangler pages deploy dist \
  --project-name luxurioushomes \
  --branch main \
  --commit-dirty=true

echo "✅ Done — https://luxurioushomes.pages.dev"
