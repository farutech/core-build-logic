import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/useT";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — FaruTech" },
      { name: "description", content: "An engineering-first collective building modern digital platforms." },
      { property: "og:title", content: "Studio — FaruTech" },
      { property: "og:description", content: "Who we are, what we believe, how we work." },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  const t = useT();
  return (
    <div>
      <section className="pt-32 md:pt-44 pb-20 relative noise overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.studio.eyebrow}</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            {t.studio.title1}<br />
            <span className="text-gradient">{t.studio.title2}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t.studio.intro}</p>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.studio.beliefsEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            {t.studio.beliefsTitle1}<br />
            <span className="text-gradient">{t.studio.beliefsTitle2}</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {t.studio.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background/60 p-8">
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.studio.footprintEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            {t.studio.footprintTitle}
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">{t.studio.footprintSub}</p>
        </div>
      </section>
    </div>
  );
}
