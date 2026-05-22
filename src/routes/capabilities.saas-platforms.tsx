import { createFileRoute } from "@tanstack/react-router";
import { Layers } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";

export const Route = createFileRoute("/capabilities/saas-platforms")({
  head: () => ({
    meta: [
      { title: "SaaS Platforms — FaruTech" },
      { name: "description", content: "Multi-tenant SaaS with billing, roles and analytics from day one." },
      { property: "og:title", content: "SaaS Platforms — FaruTech" },
      { property: "og:description", content: "Built to grow without rewrites." },
    ],
  }),
  component: () => (
    <CapabilityPage
      Icon={Layers}
      eyebrow="SaaS Platforms"
      title="Multi-tenant."
      highlight="Built to grow."
      intro="We architect SaaS the way you wish your last vendor had: tenancy, billing, roles and analytics designed before the first customer."
      problems={[
        { title: "Single-tenant lock-in", desc: "Per-client deployments draining margins." },
        { title: "Bolted-on billing", desc: "Stripe webhooks held together by hope." },
        { title: "No role model", desc: "Permissions reinvented per feature." },
        { title: "Blind to usage", desc: "No clue who uses what, when, or how much it costs." },
      ]}
      solutions={[
        { title: "Tenancy that fits", desc: "Schema, row-level or pool — modeled to your isolation needs." },
        { title: "Billing-ready", desc: "Plans, seats, metering and invoicing wired to the data model." },
        { title: "First-class RBAC", desc: "Roles, scopes and impersonation as platform primitives." },
        { title: "Usage analytics", desc: "Per-tenant cost and adoption visibility from launch." },
      ]}
      stack={["Postgres RLS", "Stripe Billing", "Clerk / WorkOS", "Kafka", "ClickHouse", "Cloudflare", "Kubernetes"]}
      useCases={[
        { title: "B2B analytics SaaS", desc: "40 tenants, isolated data, shared compute, per-seat billing live in 6 months." },
        { title: "Vertical workflow SaaS", desc: "Industry-specific workflow engine with extensible plugin model." },
        { title: "White-label platform", desc: "Reseller-ready multi-brand SaaS with per-tenant domains and theming." },
      ]}
      cta="Design your SaaS architecture."
    />
  ),
});
