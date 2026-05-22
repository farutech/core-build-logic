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
      Icon={Cpu}
      eyebrow="Architecture & Consulting"
      title="Honest diagnostics."
      highlight="Actionable roadmaps."
      intro="We come in, read the code, talk to the team, and tell you what's actually wrong — then we help you fix it without freezing the roadmap."
      problems={[
        { title: "Mystery latency", desc: "Pages slow, dashboards blank, no one knows why." },
        { title: "Cloud bill chaos", desc: "Costs growing faster than users." },
        { title: "Scaling ceilings", desc: "Hitting walls every 10x of traffic." },
        { title: "Risky deploys", desc: "Releases require ceremonies and prayers." },
      ]}
      solutions={[
        { title: "Architecture audit", desc: "2–4 week deep dive: data, infra, code, team. Findings + ranked roadmap." },
        { title: "Performance program", desc: "p95 baseline, budgets, fixes shipped, regressions blocked in CI." },
        { title: "Cost optimization", desc: "20–60% AWS/GCP bill reduction without rearchitecture." },
        { title: "Modernization plan", desc: "Strangler-fig migration: ship incrementally, kill legacy gradually." },
      ]}
      stack={["AWS", "GCP", "Kubernetes", "Terraform", "OpenTelemetry", "Datadog", "Grafana", "Postgres", "Kafka"]}
      useCases={[
        { title: "Pre-Series-B audit", desc: "Investor-grade tech diligence and 12-month modernization roadmap." },
        { title: "Cloud bill reduction", desc: "Cut a $90k/mo AWS bill by 47% over a quarter — same workload." },
        { title: "Monolith decomposition", desc: "Mapped seams, extracted 3 critical services without downtime." },
      ]}
      cta="Diagnose your platform."
    />
  ),
});
