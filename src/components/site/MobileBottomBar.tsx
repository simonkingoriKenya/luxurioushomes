import { Phone } from "lucide-react";
import { TEL_URL, WHATSAPP_URL } from "@/lib/luxurious-data";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border pb-safe">
      <div className="flex items-center gap-2 px-4 py-3">
        <a
          href={TEL_URL}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card py-3.5 text-sm font-medium active:scale-95 transition-transform"
        >
          <Phone className="h-4 w-4 text-accent" />
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white py-3.5 text-sm font-medium shadow-sm active:scale-95 transition-transform"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.89-5.33 11.9-11.9a11.83 11.83 0 0 0-3.45-8.42Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
