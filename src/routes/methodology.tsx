import { createFileRoute } from "@tanstack/react-router";
import { Methodology as MethodologySection } from "@/components/home/Methodology";
import { useT } from "@/i18n/useT";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Layout, Palette, Hammer, TrendingUp } from "lucide-react";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { Button } from "@/components/ui/button";
import { buildSeo, breadcrumbJsonLd } from "@/lib/seo";

const STEP_ICONS = [Search, Layout, Palette, Hammer, TrendingUp];
const STEP_COLORS = ["#3FC1FF", "#FF7A1A", "#B66BFF", "#22E07C", "#36E0C0"];

export const Route = createFileRoute("/methodology")({
  head: () =>
    buildSeo({
      path: "/methodology",
      title: "Methodology · FaruTech",
      description:
        "Discovery to scale: how we move from a blank repo to production. Five stages, no theater, built for systems that have to survive growth.",
      jsonLd: breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Methodology", path: "/methodology" },
      ]),
    }),
  component: MethodologyPage,
});

function MethodologyPage() {
  const t = useT();
  const openDrawer = useContactDrawer((s) => s.openDrawer);
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,122,26,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {t.methodology.pageEyebrow}
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] max-w-4xl">
            {t.methodology.pageTitle1}<br />
            <span className="text-gradient">{t.methodology.pageTitle2}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">{t.methodology.pageIntro}</p>
        </div>
      </section>

      {/* Process Pipeline, Visual cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-5">
            {t.methodology.steps.map((s, i) => {
              const Icon = STEP_ICONS[i];
              const color = STEP_COLORS[i];
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-2xl border border-border/60 bg-surface/30 p-5 group hover:border-border transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${color}12` }}
                    >
                      <Icon className="h-4 w-4" style={{ color }} />
                    </div>
                    <span className="font-mono text-xs" style={{ color }}>{s.n}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-4 inline-block rounded-lg border border-border/60 bg-background/40 px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
                    {s.out}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <MethodologySection showHeader={false} />

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            {t.finalCTA.title1} <span className="text-gradient">{t.finalCTA.title2}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">{t.finalCTA.sub}</p>
          <Button
            onClick={() => openDrawer("methodology-cta")}
            size="lg"
            className="mt-8 bg-foreground text-background hover:bg-foreground/90 h-12 px-8 rounded-full"
          >
            {t.finalCTA.primary}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
