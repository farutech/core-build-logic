import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { useLocale } from "@/i18n";

export const Route = createFileRoute("/capabilities/ux-engineering")({
  head: () => ({
    meta: [
      { title: "UX Engineering — FaruTech" },
      { name: "description", content: "Interfaces and design systems that scale with your product." },
      { property: "og:title", content: "UX Engineering — FaruTech" },
      { property: "og:description", content: "Where design meets the codebase." },
    ],
  }),
  component: UXEngineeringPage,
});

function UXEngineeringPage() {
  const { t } = useLocale();
  const data = t.uxEngineering;

  return (
    <CapabilityPage
      Icon={Sparkles}
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
