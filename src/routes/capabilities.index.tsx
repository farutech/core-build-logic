import { createFileRoute } from "@tanstack/react-router";
import { CapabilitiesGrid } from "@/components/capabilities/CapabilitiesGrid";
import { useT } from "@/i18n/useT";

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
  const t = useT();
  return (
    <section className="pt-32 md:pt-44 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {t.nav.capabilities}
        </div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
          {t.capabilities.indexTitle1}<br />
          <span className="text-gradient">{t.capabilities.indexTitle2}</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          {t.capabilities.indexIntro}
        </p>

        <div className="mt-16">
          <CapabilitiesGrid maxPerRow={3} />
        </div>
      </div>
    </section>
  );
}
