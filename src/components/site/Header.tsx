import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { WHATSAPP_URL, TEL_URL, PHONE_DISPLAY } from "@/lib/luxurious-data";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/gallery", label: "Gallery" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 min-w-0"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="Luxurious Homes"
              className="h-9 w-9 object-contain shrink-0"
              width={36}
              height={36}
            />
            <div className="leading-tight hidden xs:block sm:block">
              <div className="font-serif text-base sm:text-lg tracking-wide whitespace-nowrap">
                Luxurious Homes
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                Executive Living · Dubai
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm flex-1 justify-center">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-accent font-medium" }}
                inactiveProps={{ className: "text-foreground hover:text-accent" }}
                className="transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop: full WhatsApp button */}
            <WhatsAppButton className="hidden md:inline-flex" />

            {/* Mobile: hamburger only — bottom bar handles CTAs */}
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-border bg-card active:scale-95 transition-transform"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* Drawer panel */}
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-background shadow-2xl flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <img src={logo} alt="Luxurious Homes" className="h-8 w-8 object-contain" width={32} height={32} />
                <span className="font-serif text-base">Luxurious Homes</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-9 w-9 rounded-xl flex items-center justify-center border border-border active:scale-95 transition-transform"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-3 py-3 gap-1 flex-1 overflow-y-auto">
              {navLinks.map((l) => (
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

            {/* CTA buttons */}
            <div className="px-5 pb-8 pt-4 border-t border-border space-y-3">
              <WhatsAppButton size="lg" label="Chat on WhatsApp" className="w-full justify-center" />
              <a
                href={TEL_URL}
                className="flex items-center justify-center gap-2 w-full rounded-full border border-border bg-card py-3.5 text-sm font-medium active:scale-95 transition-transform"
              >
                <Phone className="h-4 w-4 text-accent" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
