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
      slug="saas-platforms"
      Icon={Layers}
      stack={["Postgres RLS", "Stripe Billing", "Clerk / WorkOS", "Kafka", "ClickHouse", "Cloudflare", "Kubernetes"]}
    />
  ),
});
