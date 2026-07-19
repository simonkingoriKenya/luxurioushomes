/**
 * Server-layer barrel.
 * Import server functions from here in route loaders and components.
 */
export { fetchProperties } from "./functions/properties";
export { submitInquiry } from "./functions/inquiries";
export type { Property } from "./functions/properties";
export type { InquiryInput } from "./functions/inquiries";
