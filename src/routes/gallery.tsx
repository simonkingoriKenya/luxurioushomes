import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/sections/Gallery";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Luxurious Homes Dubai" },
      { name: "description", content: "A glimpse inside our Dubai residences: bedrooms, kitchens, living rooms and bathrooms." },
      { property: "og:title", content: "Gallery — Luxurious Homes Dubai" },
      { property: "og:description", content: "A glimpse inside our Dubai residences." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <Gallery />
      <ContactCTA />
    </>
  );
}
