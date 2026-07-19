import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Properties } from "@/components/sections/Properties";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Properties showFilters={false} heading="A Taste of Our Residences" kicker="Featured" intro="Preview a few homes from our Dubai portfolio." />
      <ContactCTA />
    </>
  );
}
