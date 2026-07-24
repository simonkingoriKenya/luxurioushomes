import { Phone } from "lucide-react";
import { TEL_URL, WHATSAPP_URL } from "@/lib/luxurious-data";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
