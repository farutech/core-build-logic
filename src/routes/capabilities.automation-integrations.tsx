import { createFileRoute } from "@tanstack/react-router";
import { Workflow } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";

export const Route = createFileRoute("/capabilities/automation-integrations")({
  head: () => ({
    meta: [
      { title: "Automation & Integrations — FaruTech" },
      { name: "description", content: "Connect what you have with what you need. Workflows, APIs, sync." },
      { property: "og:title", content: "Automation & Integrations — FaruTech" },
      { property: "og:description", content: "Less manual work. Fewer integration bugs." },
    ],
  }),
  component: () => (
    <CapabilityPage
      Icon={Workflow}
      eyebrow="Automation & Integrations"
      title="Connect everything."
      highlight="Automate the rest."
      intro="We wire your systems together properly — not with brittle Zaps. APIs, event pipelines, sync engines and workflow automation built to be debugged."
      problems={[
        { title: "Manual data shuffling", desc: "Teams copying data between 5 tools every day." },
        { title: "Brittle integrations", desc: "Zapier flows that break silently." },
        { title: "Webhook hell", desc: "No retries, no observability, no idempotency." },
        { title: "Reporting lag", desc: "Numbers always 24h behind reality." },
      ]}
      solutions={[
        { title: "Event-driven backbones", desc: "Queues, consumers, dead-letter strategies — production-grade pipelines." },
        { title: "Real integration layer", desc: "Typed clients, retries, idempotency, replays. No more silent fails." },
        { title: "Workflow engines", desc: "Visual, durable workflows for ops, onboarding, approvals." },
        { title: "Realtime sync", desc: "CDC and bi-directional sync between systems of record." },
      ]}
      stack={["Temporal", "Kafka", "Inngest", "Zod", "tRPC", "Webhooks", "Airbyte", "n8n"]}
      useCases={[
        { title: "CRM ↔ billing sync", desc: "Bi-directional Salesforce ↔ Stripe sync with conflict resolution." },
        { title: "Onboarding automation", desc: "21-step onboarding workflow with human-in-the-loop steps and SLA tracking." },
        { title: "Realtime reporting", desc: "Operational metrics from 4 systems unified into one live dashboard." },
      ]}
      cta="Let's wire it together properly."
    />
  ),
});
