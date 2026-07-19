import { useState } from "react";
import { MapPin, Star, BedDouble, Bath, Wifi, Car } from "lucide-react";
import { staticProperties, type StaticProperty } from "@/lib/luxurious-data";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

// Import the actual asset images so bundler handles them correctly
import heroBedroom from "@/assets/hero-bedroom.jpg";
import livingRoom from "@/assets/living-room.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";

/** Map the image_url strings from data to real bundled assets */
function resolveImage(url: string): string {
  if (url.startsWith("/assets/hero-bedroom")) return heroBedroom;
  if (url.startsWith("/assets/living-room"))  return livingRoom;
  if (url.startsWith("/assets/bedroom-2"))    return bedroom2;
  return url; // external URL or R2 key — use as-is
}

type Category = "all" | "studio" | "onebr" | "shared";

const TABS: { id: Category; label: string }[] = [
  { id: "all",    label: "All" },
  { id: "studio", label: "Studio" },
  { id: "onebr",  label: "1 Bedroom" },
  { id: "shared", label: "Shared" },
];

type Props = {
  showFilters?: boolean;
  heading?: string;
  kicker?: string;
  intro?: string;
  /** Optionally override the property list (e.g. from a server loader) */
  properties?: StaticProperty[];
};

export function Properties({
  showFilters = true,
  heading = "Featured Residences",
  kicker = "Accommodation",
  intro = "A curated selection of executive homes across Dubai — every unit inspected, styled and ready to move in.",
  properties,
}: Props) {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const source = properties ?? staticProperties;
  const visible =
    activeTab === "all"
      ? source
      : source.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">{kicker}</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{heading}</h2>
          <div className="gold-divider w-40 mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground">{intro}</p>
        </div>

        {showFilters && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-6 py-2.5 rounded-full text-sm transition-all ${
                  activeTab === t.id
                    ? "bg-primary text-primary-foreground shadow-elegant"
                    : "border border-border bg-card hover:border-accent"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        {visible.length === 0 && (
          <p className="mt-14 text-center text-muted-foreground">
            No properties in this category yet.
          </p>
        )}

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visible.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property: p }: { property: StaticProperty }) {
  const imgSrc = resolveImage(p.image_url);

  return (
    <article className="group rounded-3xl bg-card border border-border overflow-hidden shadow-elegant hover:-translate-y-1 active:scale-[0.98] transition-transform duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imgSrc}
          alt={p.name}
          loading="lazy"
          width={1200}
          height={900}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-xs font-medium">
          {p.tag}
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-medium text-navy-deep flex items-center gap-1">
          <Star className="h-3 w-3 fill-navy-deep" /> 4.9
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl">{p.name}</h3>
            <div className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
              {p.location}
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="font-serif text-xl sm:text-2xl text-gradient-gold">{p.price}</div>
            <div className="text-xs text-muted-foreground">{p.unit}</div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground"><BedDouble className="h-4 w-4 text-accent shrink-0" />{p.beds}</div>
          <div className="flex items-center gap-2 text-muted-foreground"><Bath className="h-4 w-4 text-accent shrink-0" />{p.baths}</div>
          <div className="flex items-center gap-2 text-muted-foreground"><Wifi className="h-4 w-4 text-accent shrink-0" />{p.wifi}</div>
          <div className="flex items-center gap-2 text-muted-foreground"><Car className="h-4 w-4 text-accent shrink-0" />{p.parking}</div>
        </div>

        <WhatsAppButton
          size="lg"
          label="Book Now"
          className="mt-6 w-full justify-center"
        />
      </div>
    </article>
  );
}
