import { createFileRoute } from "@tanstack/react-router";
import { Workflow } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";

export const Route = createFileRoute("/capabilities/automation-integrations")({
  head: () => ({
    meta: [
      { title: "Automation & Integrations · FaruTech" },
      { name: "description", content: "Connect what you have with what you need. Workflows, APIs, sync." },
      { property: "og:title", content: "Automation & Integrations · FaruTech" },
      { property: "og:description", content: "Less manual work. Fewer integration bugs." },
    ],
  }),
  component: () => (
    <CapabilityPage
      slug="automation-integrations"
      Icon={Workflow}
      stack={["Temporal", "Kafka", "Inngest", "Zod", "tRPC", "Webhooks", "Airbyte", "n8n"]}
    />
  ),
});
