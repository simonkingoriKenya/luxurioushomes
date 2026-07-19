import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/gallery", label: "Gallery" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Luxurious Homes" className="h-11 w-11 object-contain" width={44} height={44} />
          <div className="leading-tight">
            <div className="font-serif text-xl tracking-wide">Luxurious Homes</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Executive Living · Dubai</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-accent" }}
              inactiveProps={{ className: "hover:text-accent" }}
              className="transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <WhatsAppButton />
      </div>
    </header>
  );
}
