import { Link } from "@tanstack/react-router";
import { Star, ArrowRight, Sparkles } from "lucide-react";
import { heroBedroom } from "@/lib/luxurious-data";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-[1.05fr_1.2fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-1.5 text-xs">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="font-medium">Comfort · Quality · Trust</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Your trusted partner for <span className="text-gradient-gold italic">executive living</span> in Dubai.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Clean, well-maintained apartments in Dubai's prime locations — thoughtfully priced, professionally hosted,
            and ready for the life you deserve.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-elegant hover:bg-navy transition-colors"
            >
              Explore Homes <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppButton size="lg" label="Book Your Space" />
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="font-serif text-3xl">500+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Happy Residents</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-3xl">12</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Prime Locations</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-serif text-3xl flex items-center gap-1">4.9 <Star className="h-5 w-5 fill-accent text-accent" /></div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Guest Rating</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl shadow-elegant border border-border">
            <img src={heroBedroom} alt="Luxury Dubai bedroom with skyline view" width={1600} height={1200} className="w-full h-[560px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-card border border-border shadow-elegant px-5 py-4">
            <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-navy-deep" />
            </div>
            <div>
              <div className="text-sm font-medium">Special Discounts</div>
              <div className="text-xs text-muted-foreground">Available this month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
