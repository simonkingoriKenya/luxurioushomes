import {
  Tag,
  MapPin,
  UserCheck,
  Shield,
  Building2,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";
import heroBedroom from "@/assets/hero-bedroom.jpg";
import livingRoom from "@/assets/living-room.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";
import mallOfEmiratesSuite from "@/assets/mall-of-emirates-suite.jpg";
import alBarariApartment from "@/assets/al-barari-apartment.jpg";
import satwaExecutiveLoft from "@/assets/satwa-executive-loft.jpg";
import abuDhabiShared from "@/assets/abu-dhabi-shared.jpg";

export const PHONE_RAW = "+971506841674";
export const PHONE_DISPLAY = "050 684 1674";
export const WHATSAPP_URL = "https://wa.me/971506841674";
export const TEL_URL = `tel:${PHONE_RAW}`;

export const highlights = [
  { icon: CheckCircle2, title: "Clean & Well-Maintained", desc: "Immaculate accommodations kept to hotel standards." },
  { icon: Tag, title: "Affordable Prices", desc: "Executive living without the executive price tag." },
  { icon: MapPin, title: "Prime Locations", desc: "Handpicked addresses across Dubai's finest districts." },
  { icon: UserCheck, title: "Professional Service", desc: "Attentive hosts, seamless move-in, zero hassle." },
];

/** Mirrors the D1 lh_properties schema. Used as dev fallback when CF env is unavailable. */
export interface StaticProperty {
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
  /** Drives the filter tabs on the Properties page. */
  category: "studio" | "onebr" | "shared";
  image_url: string;
  sort_order: number;
  active: number;
  /** Numeric AED/month value for price range filtering. */
  priceValue: number;
}

export const staticProperties: StaticProperty[] = [
  {
    id: "prop-majan-01",
    name: "Majan Heights Studio",
    location: "Majan, Dubai",
    price: "AED 1,800",
    unit: "/month · Singles",
    tag: "Featured",
    beds: "1 King Bed",
    baths: "Ensuite",
    wifi: "Fibre 500 Mbps",
    parking: "1 Space",
    category: "studio",
    image_url: heroBedroom,
    sort_order: 0,
    active: 1,
    priceValue: 1800,
  },
  {
    id: "prop-moe-01",
    name: "Mall of Emirates Suite",
    location: "Mall of Emirates, Dubai",
    price: "AED 2,400",
    unit: "/month · Suite",
    tag: "New Listing",
    beds: "Queen + Sofa",
    baths: "Marble Ensuite",
    wifi: "Fibre 1 Gbps",
    parking: "Covered",
    category: "onebr",
    image_url: mallOfEmiratesSuite,
    sort_order: 1,
    active: 1,
    priceValue: 2400,
  },
  {
    id: "prop-satwa-01",
    name: "Satwa Executive Loft",
    location: "Satwa, Dubai",
    price: "AED 3,200",
    unit: "/month · 1 BR",
    tag: "Skyline View",
    beds: "King Bed",
    baths: "Rain Shower",
    wifi: "Fibre 1 Gbps",
    parking: "Valet",
    category: "onebr",
    image_url: satwaExecutiveLoft,
    sort_order: 2,
    active: 1,
    priceValue: 3200,
  },
  {
    id: "prop-albarari-01",
    name: "Al Barari Garden Apartment",
    location: "Al Barari, Dubai",
    price: "AED 2,100",
    unit: "/month · Studio",
    tag: "Nature View",
    beds: "1 Queen Bed",
    baths: "Ensuite",
    wifi: "Fibre 500 Mbps",
    parking: "Covered",
    category: "studio",
    image_url: alBarariApartment,
    sort_order: 3,
    active: 1,
    priceValue: 2100,
  },
  {
    id: "prop-abudhabi-01",
    name: "Abu Dhabi Shared Residence",
    location: "Abu Dhabi",
    price: "AED 1,200",
    unit: "/month · Shared",
    tag: "Best Value",
    beds: "Single Bed",
    baths: "Shared Bath",
    wifi: "Fibre 300 Mbps",
    parking: "Shared",
    category: "shared",
    image_url: abuDhabiShared,
    sort_order: 4,
    active: 1,
    priceValue: 1200,
  },
];

/** @deprecated Use staticProperties. Kept for compatibility. */
export const properties = staticProperties.slice(0, 3).map((p) => ({
  name: p.name,
  location: p.location,
  price: p.price,
  unit: p.unit,
  image: p.image_url,
  tag: p.tag,
  beds: p.beds,
  baths: p.baths,
  wifi: p.wifi,
  parking: p.parking,
}));

export const gallery = [
  { src: livingRoom, label: "Spacious Living Areas" },
  { src: kitchen, label: "Fully Equipped Kitchen" },
  { src: bathroom, label: "Premium Bathrooms" },
  { src: bedroom2, label: "Comfortable Bedrooms" },
];

export const trustBadges = [
  { icon: Shield, title: "Safe & Secure", desc: "Your safety is our priority" },
  { icon: Building2, title: "Well-Maintained", desc: "Quality you can trust" },
  { icon: Users, title: "Low-Crowd Environment", desc: "Peaceful & comfortable" },
  { icon: Award, title: "Trusted by Many", desc: "Recommended by residents" },
];

export { heroBedroom, livingRoom, kitchen, bathroom, bedroom2 };
