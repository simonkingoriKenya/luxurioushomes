-- ============================================================
-- Luxurious Homes — D1 schema (migradia-db, tables prefixed lh_)
-- Run against: migradia-db (29bf4482-26c6-4d61-a90b-7d68563711d5)
-- ============================================================

-- Properties listing
CREATE TABLE IF NOT EXISTS lh_properties (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  location    TEXT NOT NULL,
  price       TEXT NOT NULL,
  unit        TEXT NOT NULL,
  tag         TEXT NOT NULL DEFAULT '',
  beds        TEXT NOT NULL DEFAULT '',
  baths       TEXT NOT NULL DEFAULT '',
  wifi        TEXT NOT NULL DEFAULT '',
  parking     TEXT NOT NULL DEFAULT '',
  -- filter category: studio | onebr | shared
  category    TEXT NOT NULL DEFAULT 'studio',
  image_url   TEXT NOT NULL DEFAULT '',
  active      INTEGER NOT NULL DEFAULT 1,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  -- ISO-8601 strings set by application code (D1 doesn't allow non-constant defaults)
  created_at  TEXT NOT NULL DEFAULT '',
  updated_at  TEXT NOT NULL DEFAULT ''
);

-- Contact inquiries from the website form
CREATE TABLE IF NOT EXISTS lh_inquiries (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  phone       TEXT NOT NULL,
  email       TEXT NOT NULL DEFAULT '',
  message     TEXT NOT NULL DEFAULT '',
  property_id TEXT,                           -- nullable FK to lh_properties.id
  status      TEXT NOT NULL DEFAULT 'new',    -- new | contacted | closed
  created_at  TEXT NOT NULL DEFAULT ''
);

-- Gallery image metadata (actual files stored in R2: luxurioushomes-media)
CREATE TABLE IF NOT EXISTS lh_gallery_images (
  id          TEXT PRIMARY KEY,
  label       TEXT NOT NULL,
  image_key   TEXT NOT NULL,   -- R2 object key
  image_url   TEXT NOT NULL,   -- public URL or /api/media/:key path
  sort_order  INTEGER NOT NULL DEFAULT 0,
  active      INTEGER NOT NULL DEFAULT 1,
  created_at  TEXT NOT NULL DEFAULT ''
);
