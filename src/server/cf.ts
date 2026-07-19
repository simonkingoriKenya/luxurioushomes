/**
 * Cloudflare Workers environment bindings.
 *
 * In Cloudflare Workers (wrangler dev / wrangler deploy) the Nitro
 * cloudflare-module preset stores the CF env on the h3 event context under
 * `event.context.cloudflare.env`.  We reach it via `getEvent()` from h3.
 *
 * Returns null in local Vite dev where no CF runtime is present — callers
 * fall back to static/in-memory data.
 */

import type { D1Database, R2Bucket } from "@cloudflare/workers-types";

export interface CloudflareEnv {
  DB: D1Database;
  STORAGE: R2Bucket;
}

export function getCloudflareEnv(): CloudflareEnv | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getEvent } = require("h3") as { getEvent: () => { context: Record<string, unknown> } | null };
    const event = getEvent();
    if (!event) return null;
    const cf = (event.context as { cloudflare?: { env?: CloudflareEnv } }).cloudflare;
    return cf?.env ?? null;
  } catch {
    return null;
  }
}
