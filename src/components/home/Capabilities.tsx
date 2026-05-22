import { Link } from "@tanstack/react-router";
import { GlowCard } from "@/components/primitives/GlowCard";
import { useLocale } from "@/i18n";
import { Boxes, Layers, Cpu, Sparkles, Workflow, ArrowUpRight } from "lucide-react";

export function Capabilities() {
  const { t } = useLocale();

  const CAPS = [
    {
      to: "/capabilities/product-engineering",
      icon: Boxes,
      title: t.capabilities.items.productEngineering.title,
      desc: t.capabilities.items.productEngineering.desc,
      bullets: t.capabilities.items.productEngineering.bullets,
      span: "lg:col-span-2 lg:row-span-2",
      big: true,
    },
    {
      to: "/capabilities/saas-platforms",
      icon: Layers,
      title: t.capabilities.items.saasPlatforms.title,
      desc: t.capabilities.items.saasPlatforms.desc,
      bullets: t.capabilities.items.saasPlatforms.bullets,
      span: "lg:col-span-2",
    },
    {
      to: "/capabilities/architecture-consulting",
      icon: Cpu,
      title: t.capabilities.items.architectureConsulting.title,
      desc: t.capabilities.items.architectureConsulting.desc,
      bullets: t.capabilities.items.architectureConsulting.bullets,
      span: "",
    },
    {
      to: "/capabilities/ux-engineering",
      icon: Sparkles,
      title: t.capabilities.items.uxEngineering.title,
      desc: t.capabilities.items.uxEngineering.desc,
      bullets: t.capabilities.items.uxEngineering.bullets,
      span: "",
    },
    {
      to: "/capabilities/automation-integrations",
      icon: Workflow,
      title: t.capabilities.items.automationIntegrations.title,
      desc: t.capabilities.items.automationIntegrations.desc,
      bullets: t.capabilities.items.automationIntegrations.bullets,
      span: "lg:col-span-2",
    },
  ];

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {t.capabilities.eyebrow}
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              {t.capabilities.title}<br />
              <span className="text-gradient">{t.capabilities.titleHighlight}</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            {t.capabilities.description}
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
