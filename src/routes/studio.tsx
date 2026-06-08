import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/useT";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Rocket, Users, BookOpen } from "lucide-react";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { Button } from "@/components/ui/button";

const VALUE_ICONS = [Code2, Rocket, Users, BookOpen];
const VALUE_COLORS = ["#3FC1FF", "#22E07C", "#B66BFF", "#FF7A1A"];

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio · FaruTech" },
      { name: "description", content: "An engineering-first collective building modern digital platforms." },
      { property: "og:title", content: "Studio · FaruTech" },
      { property: "og:description", content: "Who we are, what we believe, how we work." },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  const t = useT();
  const openDrawer = useContactDrawer((s) => s.openDrawer);
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-20 relative noise overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.studio.eyebrow}</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] max-w-4xl">
            {t.studio.title1}<br />
            <span className="text-gradient">{t.studio.title2}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t.studio.intro}</p>
        </div>
      </section>

      {/* Culture Stats */}
      <section className="py-16 border-y border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Senior engineers" },
              { value: "24h", label: "Max response time" },
              { value: "0", label: "Meetings without agendas" },
              { value: "∞", label: "Coffee consumed" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-semibold text-gradient">{stat.value}</div>
                <div className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.studio.beliefsEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            {t.studio.beliefsTitle1}<br />
            <span className="text-gradient">{t.studio.beliefsTitle2}</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {t.studio.values.map((v, i) => {
              const Icon = VALUE_ICONS[i];
              const color = VALUE_COLORS[i];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border/60 bg-surface/30 p-8 group hover:border-border transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${color}12` }}
                    >
                      <Icon className="h-5 w-5" style={{ color }} />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footprint */}
      <section className="py-24 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(182,107,255,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.studio.footprintEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            {t.studio.footprintTitle}
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">{t.studio.footprintSub}</p>

          {/* Timezone visualization */}
          <div className="mt-12 flex flex-wrap gap-3">
            {["UTC-8", "UTC-5", "UTC-3", "UTC+0", "UTC+1"].map((tz) => (
              <span
                key={tz}
                className="rounded-full border border-border/60 bg-surface/40 px-4 py-2 text-sm font-mono"
              >
                {tz}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            {t.finalCTA.title1} <span className="text-gradient">{t.finalCTA.title2}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">{t.finalCTA.sub}</p>
          <Button
            onClick={() => openDrawer("studio-cta")}
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