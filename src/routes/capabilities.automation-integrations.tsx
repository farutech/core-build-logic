import { createFileRoute } from "@tanstack/react-router";
import { Workflow } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { useLocale } from "@/i18n";

export const Route = createFileRoute("/capabilities/automation-integrations")({
  head: () => ({
    meta: [
      { title: "Automation & Integrations — FaruTech" },
      { name: "description", content: "Connect what you have with what you need. Workflows, APIs, sync." },
      { property: "og:title", content: "Automation & Integrations — FaruTech" },
      { property: "og:description", content: "Less manual work. Fewer integration bugs." },
    ],
  }),
  component: AutomationIntegrationsPage,
});

function AutomationIntegrationsPage() {
  const { t } = useLocale();
  const data = t.automationIntegrations;

  return (
    <CapabilityPage
      Icon={Workflow}
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
