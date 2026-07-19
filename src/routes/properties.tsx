import { createFileRoute } from "@tanstack/react-router";
import { Properties } from "@/components/sections/Properties";
import { Highlights } from "@/components/sections/Highlights";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Luxurious Homes Dubai" },
      { name: "description", content: "Browse our curated collection of executive homes across Dubai's prime locations." },
      { property: "og:title", content: "Properties — Luxurious Homes Dubai" },
      { property: "og:description", content: "Browse executive homes across Dubai's prime locations." },
      { property: "og:url", content: "/properties" },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <>
      <div className="pt-16 text-center max-w-2xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.35em] text-accent">Our Residences</div>
        <h1 className="mt-3 font-serif text-5xl">Executive Homes in Dubai</h1>
        <div className="gold-divider w-40 mx-auto mt-6" />
      </div>
      <Properties heading="Available Now" kicker="Book Today" intro="Every unit inspected, styled and ready to move in." />
      <Highlights />
      <ContactCTA />
    </>
  );
}
