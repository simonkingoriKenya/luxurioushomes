import { highlights } from "@/lib/luxurious-data";

export function Highlights() {
  return (
    <div className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
              <Icon className="h-5 w-5 text-navy-deep" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider">{title}</div>
              <div className="text-sm text-muted-foreground mt-1">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
