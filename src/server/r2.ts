/**
 * Cloudflare R2 storage helpers.
 * Works in Cloudflare Workers (wrangler dev / wrangler deploy).
 */
import type { R2Bucket } from "@cloudflare/workers-types";

export const R2_PUBLIC_BASE = "https://luxurioushomes-media.broad-tooth-82ac.workers.dev";

export interface UploadResult {
  key: string;
  url: string;
}

export async function uploadToR2(
  bucket: R2Bucket,
  key: string,
  data: ArrayBuffer | ReadableStream,
  contentType: string
): Promise<UploadResult> {
  await bucket.put(key, data, {
    httpMetadata: { contentType },
  });
  // URL served via the /media/:key API route in the Worker
  const url = `/api/media/${key}`;
  return { key, url };
}

export async function deleteFromR2(bucket: R2Bucket, key: string): Promise<void> {
  await bucket.delete(key);
}

export async function getFromR2(
  bucket: R2Bucket,
  key: string
): Promise<{ body: ReadableStream; contentType: string } | null> {
  const obj = await bucket.get(key);
  if (!obj) return null;
  return {
    body: obj.body,
    contentType: obj.httpMetadata?.contentType ?? "application/octet-stream",
  };
}
