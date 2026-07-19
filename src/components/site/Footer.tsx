import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/lib/luxurious-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-5 sm:grid-cols-3 items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-8 w-8 object-contain" width={32} height={32} />
          <span>© {new Date().getFullYear()} Luxurious Homes</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-5">
          <Link to="/properties" className="hover:text-accent">Properties</Link>
          <Link to="/gallery" className="hover:text-accent">Gallery</Link>
          <Link to="/why-us" className="hover:text-accent">Why Us</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
        </nav>
        <div className="flex sm:justify-end items-center gap-5">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-whatsapp">WhatsApp</a>
          <a href={TEL_URL} className="hover:text-accent">{PHONE_DISPLAY}</a>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 border-t border-border/50 pt-4 sm:pt-5">
        <p className="text-center text-xs text-muted-foreground/70">
          Powered by{" "}
          <a
            href="https://www.migradia.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Migradia
          </a>
        </p>
      </div>
    </footer>
  );
}
