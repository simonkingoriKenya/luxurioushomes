/**
 * Server functions for property listings.
 * D1 (Cloudflare Workers) when available; falls back to staticProperties in Vite dev.
 */
import { createServerFn } from "@tanstack/react-start";
import { getCloudflareEnv } from "../cf";
import { getProperties as dbGetProperties, type Property } from "../db";
import { staticProperties } from "@/lib/luxurious-data";

export type { Property };

export const fetchProperties = createServerFn({ method: "GET" })
  .validator((data: unknown) => {
    const category = typeof data === "string" ? data : "all";
    return { category };
  })
  .handler(async ({ data }) => {
    const env = getCloudflareEnv();
    if (env?.DB) {
      return dbGetProperties(env.DB, data.category === "all" ? undefined : data.category);
    }
    // Vite dev fallback
    if (data.category === "all") return staticProperties as Property[];
    return staticProperties.filter((p) => p.category === data.category) as Property[];
  });
