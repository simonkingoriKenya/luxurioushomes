import { Phone } from "lucide-react";
import { PHONE_DISPLAY, TEL_URL } from "@/lib/luxurious-data";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export function ContactCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-navy text-primary-foreground p-12 lg:p-16 shadow-elegant">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-gold opacity-20 blur-3xl" aria-hidden />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-accent">Book Your Space Today</div>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-cream leading-tight">
                Ready to move into a home that lives <span className="italic text-gradient-gold">beautifully?</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-lg">
                Speak with our team on call or WhatsApp. We'll match you to a residence that fits your budget and lifestyle — often the same day.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL_URL} className="inline-flex items-center gap-3 rounded-full bg-gradient-gold text-navy-deep px-6 py-3.5 text-sm font-semibold shadow-gold">
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
                <WhatsAppButton size="lg" label="Chat on WhatsApp" />
              </div>
            </div>
            <div className="rounded-2xl border border-cream/10 bg-navy-deep/40 backdrop-blur p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-accent">Special Offer</div>
              <div className="mt-3 font-serif text-3xl text-cream">Discounts available this month.</div>
              <ul className="mt-6 space-y-3 text-sm text-cream/80">
                {["Free first-week utilities", "Waived security processing fee", "Flexible move-in dates", "Complimentary cleaning on arrival"].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
