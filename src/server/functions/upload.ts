/**
 * TanStack Start server functions for image uploads to R2.
 */
import { createServerFn } from "@tanstack/react-start";
import { getCloudflareEnv } from "../cf";
import { uploadToR2 } from "../r2";

export const getUploadUrl = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const { filename, contentType } = data as { filename: string; contentType: string };
    return { filename, contentType };
  })
  .handler(async ({ data }) => {
    const env = getCloudflareEnv();
    if (!env?.STORAGE) {
      return { ok: false, error: "Storage not available in dev mode" };
    }
    const ext = data.filename.split(".").pop() ?? "jpg";
    const key = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    // Return the key — client will POST binary to /api/upload/:key
    return { ok: true, key, uploadPath: `/api/upload/${key}` };
  });

export { uploadToR2 };
