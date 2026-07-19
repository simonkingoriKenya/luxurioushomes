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

export const properties = [
  {
    name: "DIP-1 Ewans Residency",
    location: "Dubai Investment Park",
    price: "AED 1,800",
    unit: "/month · Singles",
    image: heroBedroom,
    tag: "Featured",
    beds: "1 King Bed",
    baths: "Ensuite",
    wifi: "Fibre 500 Mbps",
    parking: "1 Space",
  },
  {
    name: "Alkhail Gate Residence",
    location: "Al Quoz, Dubai",
    price: "AED 2,400",
    unit: "/month · Suite",
    image: livingRoom,
    tag: "New Listing",
    beds: "Queen + Sofa",
    baths: "Marble Ensuite",
    wifi: "Fibre 1 Gbps",
    parking: "Covered",
  },
  {
    name: "Downtown Executive Loft",
    location: "Business Bay",
    price: "AED 3,200",
    unit: "/month · 1 BR",
    image: bedroom2,
    tag: "Skyline View",
    beds: "King Bed",
    baths: "Rain Shower",
    wifi: "Fibre 1 Gbps",
    parking: "Valet",
  },
];

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
