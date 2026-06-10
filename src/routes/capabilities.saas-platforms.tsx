import { createFileRoute } from "@tanstack/react-router";
import { Layers } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { buildSeo, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/capabilities/saas-platforms")({
  head: () =>
    buildSeo({
      path: "/capabilities/saas-platforms",
      title: "SaaS Platforms · FaruTech",
      description:
        "Multi-tenant SaaS with billing, roles and analytics from day one. Built to grow without rewrites.",
      jsonLd: [
        serviceJsonLd({
          name: "SaaS Platforms",
          description:
            "Multi-tenant SaaS platforms with billing, roles and analytics, built to scale without rewrites.",
          path: "/capabilities/saas-platforms",
        }),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Capabilities", path: "/capabilities" },
          { name: "SaaS Platforms", path: "/capabilities/saas-platforms" },
        ]),
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
