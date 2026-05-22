import { Link } from "@tanstack/react-router";
import { GlowCard } from "@/components/primitives/GlowCard";
import { Boxes, Layers, Cpu, Sparkles, Workflow, ArrowUpRight } from "lucide-react";

type Cap = {
  to: string;
  icon: typeof Boxes;
  title: string;
  desc: string;
  bullets: string[];
  span: string;
  big?: boolean;
};

const CAPS: Cap[] = [
  {
    to: "/capabilities/product-engineering",
    icon: Boxes,
    title: "Product Engineering",
    desc: "Idea to platform in production. No shortcuts, no tech debt.",
    bullets: ["Web & mobile platforms", "Internal tools", "Real-time systems", "Critical operations"],
    span: "lg:col-span-2 lg:row-span-2",
    big: true,
  },
  {
    to: "/capabilities/saas-platforms",
    icon: Layers,
    title: "SaaS Platforms",
    desc: "Multi-tenant, billing-ready, observable from day one.",
    bullets: ["Multi-tenant arch", "Billing & subscriptions", "Analytics & roles"],
    span: "lg:col-span-2",
  },
  {
    to: "/capabilities/architecture-consulting",
    icon: Cpu,
    title: "Architecture & Consulting",
    desc: "Honest technical diagnostics. Actionable roadmaps.",
    bullets: ["Cloud modernization", "Performance audits", "Cost optimization"],
    span: "",
  },
  {
    to: "/capabilities/ux-engineering",
    icon: Sparkles,
    title: "UX Engineering",
    desc: "Interfaces that scale with your product, not against it.",
    bullets: ["Design systems", "Complex UI", "Motion & a11y"],
    span: "",
  },
  {
    to: "/capabilities/automation-integrations",
    icon: Workflow,
    title: "Automation & Integrations",
    desc: "Connect what you have with what you need.",
    bullets: ["APIs & webhooks", "Workflow engines", "Data sync"],
    span: "lg:col-span-2",
  },
] as const;

export function Capabilities() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              01 — Capabilities
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              Five disciplines.<br />
              <span className="text-gradient">One engineering org.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Not a menu of services — a coherent system for shipping
            platforms that survive growth.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4 lg:auto-rows-[minmax(220px,auto)]">
          {CAPS.map((c) => (
            <GlowCard key={c.to} className={c.span}>
              <Link to={c.to} className="block h-full p-8">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-border">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className={`mt-6 font-display font-semibold tracking-tight ${c.big ? "text-3xl" : "text-xl"}`}>
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                {c.big && (
                  <ul className="mt-8 grid grid-cols-2 gap-3">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
