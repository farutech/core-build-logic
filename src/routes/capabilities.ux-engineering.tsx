import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";

export const Route = createFileRoute("/capabilities/ux-engineering")({
  head: () => ({
    meta: [
      { title: "UX Engineering · FaruTech" },
      { name: "description", content: "Interfaces and design systems that scale with your product." },
      { property: "og:title", content: "UX Engineering · FaruTech" },
      { property: "og:description", content: "Where design meets the codebase." },
    ],
  }),
  component: () => (
    <CapabilityPage
      slug="ux-engineering"
      Icon={Sparkles}
      stack={["React", "Radix", "shadcn/ui", "Tailwind", "Framer Motion", "GSAP", "Storybook", "Figma"]}
    />
  ),
});
