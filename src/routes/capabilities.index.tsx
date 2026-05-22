import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Layers, Cpu, Sparkles, Workflow, ArrowUpRight } from "lucide-react";
import { GlowCard } from "@/components/primitives/GlowCard";

export const Route = createFileRoute("/capabilities/")({
  head: () => ({
    meta: [
      { title: "Capabilities — FaruTech" },
      { name: "description", content: "Five engineering disciplines that ship and scale modern platforms." },
      { property: "og:title", content: "Capabilities — FaruTech" },
      { property: "og:description", content: "Product engineering, SaaS, architecture, UX and automation." },
    ],
  }),
  component: CapabilitiesIndex,
});

const ITEMS = [
  { to: "/capabilities/product-engineering", icon: Boxes, title: "Product Engineering", desc: "Idea to platform in production." },
  { to: "/capabilities/saas-platforms", icon: Layers, title: "SaaS Platforms", desc: "Multi-tenant, billing, observable." },
  { to: "/capabilities/architecture-consulting", icon: Cpu, title: "Architecture & Consulting", desc: "Diagnostics and roadmaps." },
  { to: "/capabilities/ux-engineering", icon: Sparkles, title: "UX Engineering", desc: "Interfaces that scale." },
  { to: "/capabilities/automation-integrations", icon: Workflow, title: "Automation & Integrations", desc: "Connect everything." },
];

function CapabilitiesIndex() {
  return (
    <section className="pt-32 md:pt-44 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Capabilities</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
          Five disciplines.<br />
          <span className="text-gradient">One engineering org.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Each capability stands alone. Together, they're how we build platforms that don't need to be rewritten in two years.
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {ITEMS.map((c) => (
            <GlowCard key={c.to}>
              <Link to={c.to} className="block p-8">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-border">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight">{c.title}</h2>
                <p className="mt-2 text-muted-foreground">{c.desc}</p>
              </Link>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
