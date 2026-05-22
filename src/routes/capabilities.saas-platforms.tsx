import { createFileRoute } from "@tanstack/react-router";
import { Layers } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { useLocale } from "@/i18n";

export const Route = createFileRoute("/capabilities/saas-platforms")({
  head: () => ({
    meta: [
      { title: "SaaS Platforms — FaruTech" },
      { name: "description", content: "Multi-tenant SaaS with billing, roles and analytics from day one." },
      { property: "og:title", content: "SaaS Platforms — FaruTech" },
      { property: "og:description", content: "Built to grow without rewrites." },
    ],
  }),
  component: SaaSPlatformsPage,
});

function SaaSPlatformsPage() {
  const { t } = useLocale();
  const data = t.saasPlatforms;

  return (
    <CapabilityPage
      Icon={Layers}
      eyebrow={data.eyebrow}
      title={data.title}
      highlight={data.highlight}
      intro={data.intro}
      problems={data.problems}
      solutions={data.solutions}
      stack={data.stack}
      useCases={data.useCases}
      cta={data.cta}
    />
  );
}
