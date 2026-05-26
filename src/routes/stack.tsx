import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/useT";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — FaruTech" },
      { name: "description", content: "The tools we reach for first — and the criteria behind each choice." },
      { property: "og:title", content: "Stack — FaruTech" },
      { property: "og:description", content: "Opinionated, justified, replaceable." },
    ],
  }),
  component: StackPage,
});

function StackPage() {
  const t = useT();
  return (
    <div>
      <section className="pt-32 md:pt-44 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.stack.eyebrow}</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            {t.stack.title1}<br />
            <span className="text-gradient">{t.stack.title2}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{t.stack.intro}</p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid gap-4 md:grid-cols-2">
          {t.stack.layers.map((l) => (
            <div key={l.title} className="rounded-2xl border border-border bg-surface/40 p-8">
              <div className="text-xs font-mono uppercase tracking-widest text-primary">{l.title}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {l.items.map((i) => (
                  <span key={i} className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-sm font-mono">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
