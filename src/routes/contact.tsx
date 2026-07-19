import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { PHONE_DISPLAY, TEL_URL } from "@/lib/luxurious-data";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Luxurious Homes Dubai" },
      { name: "description", content: "Call or WhatsApp Luxurious Homes to book your executive apartment in Dubai today." },
      { property: "og:title", content: "Contact — Luxurious Homes Dubai" },
      { property: "og:description", content: "Call or WhatsApp Luxurious Homes to book your executive apartment in Dubai." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">Get in Touch</div>
          <h1 className="mt-3 font-serif text-5xl sm:text-6xl">Book your space today</h1>
          <div className="gold-divider w-40 mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground">
            Speak with our team on call or WhatsApp. We'll match you to a residence that fits your budget and lifestyle — often the same day.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <a href={TEL_URL} className="group rounded-2xl border border-border bg-card p-8 text-center hover:border-accent transition-all shadow-elegant">
            <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center">
              <Phone className="h-6 w-6 text-navy-deep" />
            </div>
            <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">Call Us</div>
            <div className="mt-2 font-serif text-2xl group-hover:text-accent transition-colors">{PHONE_DISPLAY}</div>
          </a>
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
            <div className="mx-auto h-14 w-14 rounded-full bg-whatsapp flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="h-6 w-6"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.89-5.33 11.9-11.9a11.83 11.83 0 0 0-3.45-8.42Z"/></svg>
            </div>
            <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
            <div className="mt-2 font-serif text-2xl">Chat instantly</div>
            <div className="mt-4"><WhatsAppButton label="Open WhatsApp" /></div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-elegant">
            <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center">
              <MapPin className="h-6 w-6 text-navy-deep" />
            </div>
            <div className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">Locations</div>
            <div className="mt-2 font-serif text-2xl">Across Dubai</div>
            <div className="mt-2 text-sm text-muted-foreground">DIP · Al Quoz · Business Bay · Alkhail Gate</div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card/50 p-6 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 text-accent" />
          Available 7 days a week · 9:00 AM – 10:00 PM Gulf Standard Time
        </div>
      </div>
    </section>
  );
}
