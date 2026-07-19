import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/luxurious-data";

type Props = {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
};

export function WhatsAppButton({ label = "WhatsApp", size = "md", variant = "solid", className = "" }: Props) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-sm",
  };
  const base =
    variant === "solid"
      ? "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-[0_10px_30px_-10px_var(--whatsapp)]"
      : "border border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={`inline-flex items-center gap-2 rounded-full font-medium transition-colors ${sizes[size]} ${base} ${className}`}
    >
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
}
