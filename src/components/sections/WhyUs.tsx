import { trustBadges } from "@/lib/luxurious-data";

export function WhyUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">Why Luxurious Homes</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Trusted across Dubai</h2>
          <div className="gold-divider w-40 mx-auto mt-6" />
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-8 text-center hover:border-accent/60 hover:shadow-gold transition-all">
              <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center">
                <Icon className="h-6 w-6 text-navy-deep" />
              </div>
              <div className="mt-5 font-serif text-xl">{title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
