import { gallery } from "@/lib/luxurious-data";

export function Gallery() {
  return (
    <section className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">A Glimpse Inside</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-cream">Live Better, Live Luxurious</h2>
          <div className="gold-divider w-40 mx-auto mt-6" />
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gallery.map((g) => (
            <div key={g.label} className="group relative overflow-hidden rounded-2xl aspect-[4/5] border border-white/10">
              <img src={g.src} alt={g.label} loading="lazy" width={1200} height={900} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs uppercase tracking-widest text-accent">Featured</div>
                <div className="font-serif text-xl mt-1 text-cream">{g.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
