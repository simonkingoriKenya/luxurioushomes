import { useRef, useEffect, useState } from "react";
import { Search, X, ChevronDown } from "lucide-react";

export type Category = "all" | "studio" | "onebr" | "shared";
export type SortKey = "default" | "price-asc" | "price-desc";

export interface FilterState {
  query: string;
  category: Category;
  location: string;
  priceMax: number; // 0 = any
  sortBy: SortKey;
}

export const FILTER_DEFAULTS: FilterState = {
  query: "",
  category: "all",
  location: "",
  priceMax: 0,
  sortBy: "default",
};

const CATEGORY_TABS: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "studio", label: "Studio" },
  { id: "onebr", label: "1 Bedroom" },
  { id: "shared", label: "Shared" },
];

export const PRICE_BRACKETS = [
  { label: "Any price", max: 0 },
  { label: "Under AED 1,500", max: 1500 },
  { label: "AED 1,500 – 2,000", max: 2000, min: 1500 },
  { label: "AED 2,000 – 2,500", max: 2500, min: 2000 },
  { label: "AED 2,500+", max: 99999, min: 2500 },
];

const SORT_OPTIONS: { id: SortKey; label: string }[] = [
  { id: "default", label: "Featured" },
  { id: "price-asc", label: "Price: Low → High" },
  { id: "price-desc", label: "Price: High → Low" },
];

/** Comprehensive list of major Dubai districts and nearby areas. */
export const DUBAI_LOCATIONS = [
  "Al Barari",
  "Al Barsha",
  "Al Furjan",
  "Al Karama",
  "Al Khail Heights",
  "Al Mamzar",
  "Al Mankhool",
  "Al Muraqqabat",
  "Al Nahda",
  "Al Quoz",
  "Al Rigga",
  "Al Satwa",
  "Al Sufouh",
  "Al Warqa",
  "Arabian Ranches",
  "Arjan",
  "Barsha Heights (Tecom)",
  "Bluewaters Island",
  "Bur Dubai",
  "Business Bay",
  "Deira",
  "DIFC",
  "Discovery Gardens",
  "Downtown Dubai",
  "Dubai Creek Harbour",
  "Dubai Festival City",
  "Dubai Hills Estate",
  "Dubai Internet City",
  "Dubai Marina",
  "Dubai Silicon Oasis",
  "Dubai South",
  "Dubai Sports City",
  "Dubailand",
  "Falcon City",
  "International City",
  "Jumeirah",
  "Jumeirah Beach Residence (JBR)",
  "Jumeirah Lake Towers (JLT)",
  "Jumeirah Village Circle (JVC)",
  "Jumeirah Village Triangle (JVT)",
  "Liwan",
  "Majan",
  "Meydan",
  "Mirdif",
  "Motor City",
  "Muhaisnah",
  "Muteena",
  "Nad Al Sheba",
  "Palm Jumeirah",
  "Ras Al Khor",
  "Remraam",
  "Satwa",
  "The Greens",
  "The Springs",
  "The Views",
  "Town Square",
  "Umm Suqeim",
  "Abu Dhabi",
] as const;

interface Props {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  resultCount: number;
  totalCount: number;
}

export function PropertyFilters({ filters, onChange, resultCount, totalCount }: Props) {
  const set = <K extends keyof FilterState>(key: K, val: FilterState[K]) =>
    onChange({ ...filters, [key]: val });

  const isFiltered =
    filters.query !== "" ||
    filters.category !== "all" ||
    filters.location !== "" ||
    filters.priceMax !== 0 ||
    filters.sortBy !== "default";

  const clear = () => onChange(FILTER_DEFAULTS);

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          placeholder="Search by name or location…"
          value={filters.query}
          onChange={(e) => set("query", e.target.value)}
          className="w-full rounded-2xl border border-border bg-card pl-11 pr-10 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow"
        />
        {filters.query && (
          <button
            onClick={() => set("query", "")}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Filter strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {/* Category tabs */}
        <div className="flex items-center gap-1.5 shrink-0 bg-muted/50 rounded-xl p-1">
          {CATEGORY_TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => set("category", t.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                filters.category === t.id
                  ? "bg-card shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="h-6 w-px bg-border shrink-0" />

        {/* Location dropdown */}
        <Dropdown
          label="Location"
          value={filters.location || "Any location"}
          active={filters.location !== ""}
          onClear={() => set("location", "")}
          scrollable
        >
          <DropdownItem
            label="Any location"
            selected={filters.location === ""}
            onClick={() => set("location", "")}
          />
          {DUBAI_LOCATIONS.map((loc) => (
            <DropdownItem
              key={loc}
              label={loc}
              selected={filters.location === loc}
              onClick={() => set("location", loc)}
            />
          ))}
        </Dropdown>

        {/* Price dropdown */}
        <Dropdown
          label="Price"
          value={
            filters.priceMax === 0
              ? "Any price"
              : PRICE_BRACKETS.find((b) => b.max === filters.priceMax)?.label ?? "Any price"
          }
          active={filters.priceMax !== 0}
          onClear={() => set("priceMax", 0)}
        >
          {PRICE_BRACKETS.map((b) => (
            <DropdownItem
              key={b.max}
              label={b.label}
              selected={filters.priceMax === b.max}
              onClick={() => set("priceMax", b.max)}
            />
          ))}
        </Dropdown>

        {/* Sort dropdown */}
        <Dropdown
          label="Sort"
          value={SORT_OPTIONS.find((o) => o.id === filters.sortBy)?.label ?? "Featured"}
          active={filters.sortBy !== "default"}
          onClear={() => set("sortBy", "default")}
        >
          {SORT_OPTIONS.map((o) => (
            <DropdownItem
              key={o.id}
              label={o.label}
              selected={filters.sortBy === o.id}
              onClick={() => set("sortBy", o.id)}
            />
          ))}
        </Dropdown>

        {/* Clear all */}
        {isFiltered && (
          <button
            onClick={clear}
            className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-accent border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-colors whitespace-nowrap"
          >
            <X className="h-3 w-3" />
            Clear all
          </button>
        )}
      </div>

      {/* Results count */}
      {isFiltered && (
        <p className="text-xs text-muted-foreground">
          {resultCount === 0
            ? "No properties match your filters"
            : `${resultCount} of ${totalCount} ${totalCount === 1 ? "property" : "properties"}`}
        </p>
      )}
    </div>
  );
}

// ─── Dropdown ────────────────────────────────────────────────────────────────

interface DropdownProps {
  label: string;
  value: string;
  active: boolean;
  onClear: () => void;
  children: React.ReactNode;
  scrollable?: boolean;
}

function Dropdown({ label: _label, value, active, onClear, children, scrollable }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all whitespace-nowrap ${
          active
            ? "border-accent bg-accent/10 text-accent"
            : "border-border bg-card text-foreground hover:border-accent/50"
        }`}
      >
        <span className="max-w-[140px] truncate">{value}</span>
        {active ? (
          <X
            className="h-3 w-3 shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
              setOpen(false);
            }}
          />
        ) : (
          <ChevronDown
            className={`h-3 w-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {open && (
        <div
          className={`absolute left-0 top-full mt-1.5 z-30 min-w-[200px] rounded-2xl border border-border bg-card shadow-elegant overflow-hidden ${
            scrollable ? "max-h-64 overflow-y-auto" : ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownItem({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
        selected
          ? "bg-accent/10 text-accent font-medium"
          : "hover:bg-muted text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
