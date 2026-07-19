/**
 * Server functions for contact inquiries.
 * Persists to D1 lh_inquiries table when Cloudflare env is available.
 */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getCloudflareEnv } from "../cf";
import { createInquiry } from "../db";

const InquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").or(z.literal("")).default(""),
  message: z.string().default(""),
  property_id: z.string().optional(),
});

export type InquiryInput = z.infer<typeof InquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => InquirySchema.parse(data))
  .handler(async ({ data }) => {
    const env = getCloudflareEnv();
    if (env?.DB) {
      const id = await createInquiry(env.DB, {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        property_id: data.property_id,
      });
      return { ok: true, id };
    }
    // Dev — no D1, log only
    console.log("[dev] Inquiry (not persisted):", data);
    return { ok: true, id: `dev-${Date.now()}` };
  });
