import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { buildSeo, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/capabilities/ux-engineering")({
  head: () =>
    buildSeo({
      path: "/capabilities/ux-engineering",
      title: "UX Engineering · FaruTech",
      description:
        "Interfaces and design systems that scale with your product, where design meets the codebase.",
      jsonLd: [
        serviceJsonLd({
          name: "UX Engineering",
          description:
            "Design systems and production-grade interfaces that scale with your product.",
          path: "/capabilities/ux-engineering",
        }),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Capabilities", path: "/capabilities" },
          { name: "UX Engineering", path: "/capabilities/ux-engineering" },
        ]),
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
