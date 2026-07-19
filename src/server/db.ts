/**
 * D1 database helpers.
 * All tables are prefixed `lh_` (shared database with other Migradia projects).
 *
 * Works in Cloudflare Workers (wrangler dev / wrangler deploy).
 * Callers should fall back to static data when getCloudflareEnv() returns null.
 */
import type { D1Database } from "@cloudflare/workers-types";

export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  unit: string;
  tag: string;
  beds: string;
  baths: string;
  wifi: string;
  parking: string;
  category: "studio" | "onebr" | "shared";
  image_url: string;
  sort_order: number;
  active: number;
}

export interface Inquiry {
  name: string;
  phone: string;
  email: string;
  message: string;
  property_id?: string;
}

export interface GalleryImage {
  id: string;
  label: string;
  image_url: string;
  sort_order: number;
}

export async function getProperties(
  db: D1Database,
  category?: string
): Promise<Property[]> {
  let sql = "SELECT * FROM lh_properties WHERE active = 1";
  const params: string[] = [];
  if (category && category !== "all") {
    sql += " AND category = ?";
    params.push(category);
  }
  sql += " ORDER BY sort_order ASC";
  const result = await db.prepare(sql).bind(...params).all<Property>();
  return result.results ?? [];
}

export async function createInquiry(
  db: D1Database,
  inquiry: Inquiry
): Promise<string> {
  const id = crypto.randomUUID().replace(/-/g, "").slice(0, 16);
  const now = new Date().toISOString();
  await db
    .prepare(
      "INSERT INTO lh_inquiries (id, name, phone, email, message, property_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
    )
    .bind(
      id,
      inquiry.name,
      inquiry.phone,
      inquiry.email,
      inquiry.message,
      inquiry.property_id ?? null,
      now
    )
    .run();
  return id;
}

export async function getGalleryImages(
  db: D1Database
): Promise<GalleryImage[]> {
  const result = await db
    .prepare(
      "SELECT * FROM lh_gallery_images WHERE active = 1 ORDER BY sort_order ASC"
    )
    .all<GalleryImage>();
  return result.results ?? [];
}
