import { createFileRoute } from "@tanstack/react-router";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/useT";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — FaruTech" },
      { name: "description", content: "Build the tools of tomorrow, today. Open engineering, design and platform roles." },
      { property: "og:title", content: "Careers — FaruTech" },
      { property: "og:description", content: "An engineering-first collective hiring senior builders." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const t = useT();
  const openDrawer = useContactDrawer((s) => s.openDrawer);
  return (
    <div>
      <section className="pt-32 md:pt-44 pb-20 relative noise overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.careers.eyebrow}</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            {t.careers.title1}<br />
            {t.careers.title2} <span className="text-gradient">{t.careers.titleAccent}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">{t.careers.intro}</p>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.careers.rolesEyebrow}</div>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border overflow-hidden bg-background/60">
            {t.careers.roles.map((r) => (
              <div key={r.title} className="flex flex-wrap items-center justify-between gap-4 p-6 hover:bg-surface/40 transition-colors">
                <div>
                  <div className="font-display text-lg font-semibold">{r.title}</div>
                  <div className="mt-1 flex gap-2 flex-wrap">
                    {r.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => openDrawer(`careers:${r.title}`)}>
                  {t.careers.apply}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.careers.processEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            {t.careers.processTitle1} <span className="text-gradient">{t.careers.processTitle2}</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {t.careers.process.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border bg-surface/40 p-6">
                <div className="font-mono text-xs text-primary">{p.n}</div>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">{t.careers.finalTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.careers.finalSub}</p>
          <Button
            onClick={() => openDrawer("careers:general")}
            size="lg"
            className="mt-8 bg-foreground text-background hover:bg-foreground/90 h-12 px-6 rounded-full"
          >
            {t.careers.finalCTA}
          </Button>
        </div>
      </section>
    </div>
  );
}
