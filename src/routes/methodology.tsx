import { createFileRoute } from "@tanstack/react-router";
import { Methodology as MethodologySection } from "@/components/home/Methodology";
import { useT } from "@/i18n/useT";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Methodology — FaruTech" },
      { name: "description", content: "Discovery to scale: how we move from blank repo to production." },
      { property: "og:title", content: "Methodology — FaruTech" },
      { property: "og:description", content: "Five stages. No theater. Built for systems that have to survive growth." },
    ],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  const t = useT();
  return (
    <div className="pt-20">
      <section className="pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {t.methodology.pageEyebrow}
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            {t.methodology.pageTitle1}<br />
            <span className="text-gradient">{t.methodology.pageTitle2}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">{t.methodology.pageIntro}</p>
        </div>
      </section>
      <MethodologySection showHeader={false} />
    </div>
  );
}
