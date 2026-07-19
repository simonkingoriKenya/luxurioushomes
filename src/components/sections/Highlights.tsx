import { highlights } from "@/lib/luxurious-data";

export function Highlights() {
  return (
    <div className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
        {highlights.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-navy-deep" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider leading-tight">{title}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-snug hidden sm:block">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
