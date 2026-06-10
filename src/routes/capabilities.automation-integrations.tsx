import { createFileRoute } from "@tanstack/react-router";
import { Workflow } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { buildSeo, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/capabilities/automation-integrations")({
  head: () =>
    buildSeo({
      path: "/capabilities/automation-integrations",
      title: "Automation & Integrations · FaruTech",
      description:
        "Connect what you have with what you need: workflows, APIs and data sync. Less manual work, fewer integration bugs.",
      jsonLd: [
        serviceJsonLd({
          name: "Automation & Integrations",
          description:
            "Workflow automation, API integrations and reliable data sync between your systems.",
          path: "/capabilities/automation-integrations",
        }),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Capabilities", path: "/capabilities" },
          { name: "Automation & Integrations", path: "/capabilities/automation-integrations" },
        ]),
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
