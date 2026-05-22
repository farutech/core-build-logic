import { createFileRoute } from "@tanstack/react-router";
import { Cpu } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { useLocale } from "@/i18n";

export const Route = createFileRoute("/capabilities/architecture-consulting")({
  head: () => ({
    meta: [
      { title: "Architecture & Consulting — FaruTech" },
      { name: "description", content: "Honest technical diagnostics and actionable roadmaps." },
      { property: "og:title", content: "Architecture & Consulting — FaruTech" },
      { property: "og:description", content: "Modernization, performance, cloud, scale." },
    ],
  }),
  component: ArchitectureConsultingPage,
});

function ArchitectureConsultingPage() {
  const { t } = useLocale();
  const data = t.architectureConsulting;

  return (
    <CapabilityPage
      Icon={Cpu}
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
