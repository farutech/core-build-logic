import { createFileRoute } from "@tanstack/react-router";
import { Cpu } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { buildSeo, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/capabilities/architecture-consulting")({
  head: () =>
    buildSeo({
      path: "/capabilities/architecture-consulting",
      title: "Architecture & Consulting · FaruTech",
      description:
        "Honest technical diagnostics and actionable roadmaps: modernization, performance, cloud and scale.",
      jsonLd: [
        serviceJsonLd({
          name: "Architecture & Consulting",
          description:
            "Technical diagnostics, modernization and scaling roadmaps for production systems.",
          path: "/capabilities/architecture-consulting",
        }),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Capabilities", path: "/capabilities" },
          { name: "Architecture & Consulting", path: "/capabilities/architecture-consulting" },
        ]),
      ],
    }),
  component: () => (
    <CapabilityPage
      slug="architecture-consulting"
      Icon={Cpu}
      stack={["AWS", "GCP", "Kubernetes", "Terraform", "OpenTelemetry", "Datadog", "Grafana", "Postgres", "Kafka"]}
    />
  ),
});
