import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/lib/luxurious-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 grid gap-6 sm:grid-cols-3 items-center text-sm text-muted-foreground">
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
    </footer>
  );
}
