import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Layers, Cpu, Sparkles, Workflow } from "lucide-react";
import { DynamicCapabilitiesGrid } from "@/components/primitives/DynamicCapabilitiesGrid";
import { useLocale } from "@/i18n";

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

function CapabilitiesIndex() {
  const { t } = useLocale();

  const ITEMS = [
    { to: "/capabilities/product-engineering", icon: Boxes, title: t.capabilities.items.productEngineering.title, desc: t.capabilities.items.productEngineering.desc },
    { to: "/capabilities/saas-platforms", icon: Layers, title: t.capabilities.items.saasPlatforms.title, desc: t.capabilities.items.saasPlatforms.desc },
    { to: "/capabilities/architecture-consulting", icon: Cpu, title: t.capabilities.items.architectureConsulting.title, desc: t.capabilities.items.architectureConsulting.desc },
    { to: "/capabilities/ux-engineering", icon: Sparkles, title: t.capabilities.items.uxEngineering.title, desc: t.capabilities.items.uxEngineering.desc },
    { to: "/capabilities/automation-integrations", icon: Workflow, title: t.capabilities.items.automationIntegrations.title, desc: t.capabilities.items.automationIntegrations.desc },
  ];

  return (
    <section className="pt-32 md:pt-44 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.capabilitiesIndex.eyebrow}</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
          {t.capabilitiesIndex.title}<br />
          <span className="text-gradient">{t.capabilitiesIndex.titleHighlight}</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          {t.capabilitiesIndex.description}
        </p>

        <div className="mt-16">
          <DynamicCapabilitiesGrid items={ITEMS} />
        </div>
      </div>
    </section>
  );
}
