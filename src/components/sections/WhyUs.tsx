import { trustBadges } from "@/lib/luxurious-data";

export function WhyUs() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">Why Luxurious Homes</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Trusted across Dubai</h2>
          <div className="gold-divider w-40 mx-auto mt-6" />
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustBadges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl sm:rounded-2xl border border-border bg-card p-5 sm:p-8 text-center transition-all hover:border-accent/60 hover:shadow-gold active:scale-[0.98]">
              <div className="mx-auto h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-gold flex items-center justify-center">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-navy-deep" />
              </div>
              <div className="mt-4 sm:mt-5 font-serif text-lg sm:text-xl">{title}</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
