import { GlowCard } from "@/components/primitives/GlowCard";
import { ArrowUpRight } from "lucide-react";

const CASES = [
  {
    tag: "FinTech · Series B",
    title: "Real-time risk engine",
    desc: "Migrated a 200k-tx/day risk pipeline from cron-driven Python to event-sourced services. p95 latency down 87%.",
    metric: "87%",
    metricLabel: "lower p95",
  },
  {
    tag: "Logistics · Enterprise",
    title: "Multi-tenant ops platform",
    desc: "Rebuilt a legacy operations suite into a multi-region SaaS. Onboarded 40 tenants in 6 months with zero downtime.",
    metric: "40",
    metricLabel: "tenants live",
  },
  {
    tag: "Health · Scale-up",
    title: "Clinical workflow OS",
    desc: "Designed and shipped a workflow engine that replaced 7 internal tools across 3 specialties.",
    metric: "7→1",
    metricLabel: "tools consolidated",
  },
];

export function Work() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              04 — Selected work
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Platforms <span className="text-gradient">in production.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {CASES.map((c) => (
            <GlowCard key={c.title} className="p-8">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {c.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {c.desc}
                </p>
                <div className="mt-8 flex items-baseline gap-2 pt-6 border-t border-border">
                  <span className="font-display text-3xl font-semibold text-gradient">
                    {c.metric}
                  </span>
                  <span className="text-xs text-muted-foreground">{c.metricLabel}</span>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
