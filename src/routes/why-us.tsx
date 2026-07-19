import { createFileRoute } from "@tanstack/react-router";
import { WhyUs } from "@/components/sections/WhyUs";
import { Highlights } from "@/components/sections/Highlights";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Us — Luxurious Homes Dubai" },
      { name: "description", content: "Safe, well-maintained, professionally hosted apartments trusted by hundreds of residents across Dubai." },
      { property: "og:title", content: "Why Us — Luxurious Homes Dubai" },
      { property: "og:description", content: "Trusted executive living, professionally hosted across Dubai." },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <>
      <WhyUs />
      <Highlights />
      <ContactCTA />
    </>
  );
}
