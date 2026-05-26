import { createFileRoute } from "@tanstack/react-router";
import { Cpu } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";

export const Route = createFileRoute("/capabilities/architecture-consulting")({
  head: () => ({
    meta: [
      { title: "Architecture & Consulting — FaruTech" },
      { name: "description", content: "Honest technical diagnostics and actionable roadmaps." },
      { property: "og:title", content: "Architecture & Consulting — FaruTech" },
      { property: "og:description", content: "Modernization, performance, cloud, scale." },
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
