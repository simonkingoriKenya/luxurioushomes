import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { WHATSAPP_URL, TEL_URL, PHONE_DISPLAY } from "@/lib/luxurious-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/gallery", label: "Gallery" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
            <img src={logo} alt="Luxurious Homes" className="h-9 w-9 sm:h-11 sm:w-11 object-contain" width={44} height={44} />
            <div className="leading-tight">
              <div className="font-serif text-lg sm:text-xl tracking-wide">Luxurious Homes</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Executive Living · Dubai</div>
            </div>
          </Link>

          {/* Desktop nav */}
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

          <div className="flex items-center gap-2 sm:gap-3">
            <WhatsAppButton className="hidden sm:inline-flex" />
            {/* Mobile: compact WhatsApp icon-only */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-whatsapp text-white shadow-sm active:scale-95 transition-transform"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.89-5.33 11.9-11.9a11.83 11.83 0 0 0-3.45-8.42Z" />
              </svg>
            </a>
            {/* Hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-border bg-card active:scale-95 transition-transform"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-background shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
                <img src={logo} alt="Luxurious Homes" className="h-9 w-9 object-contain" width={36} height={36} />
                <span className="font-serif text-lg">Luxurious Homes</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-9 w-9 rounded-xl flex items-center justify-center border border-border active:scale-95 transition-transform"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "bg-accent/10 text-accent font-medium" }}
                  inactiveProps={{ className: "text-foreground" }}
                  className="flex items-center px-4 py-3.5 rounded-xl text-base transition-colors active:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="px-5 py-5 border-t border-border space-y-3">
              <WhatsAppButton size="lg" label="Chat on WhatsApp" className="w-full justify-center" />
              <a
                href={TEL_URL}
                className="flex items-center justify-center gap-2 w-full rounded-full border border-border bg-card py-3.5 text-sm font-medium active:scale-95 transition-transform"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
