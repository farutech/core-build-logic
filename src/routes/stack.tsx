import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/useT";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Server, Database, Cloud, Eye, BrainCircuit } from "lucide-react";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { Button } from "@/components/ui/button";

const LAYER_ICONS = [Layers, Server, Database, Cloud, Eye, BrainCircuit];
const LAYER_COLORS = [
  "#3FC1FF", // Frontend
  "#22E07C", // Backend
  "#B66BFF", // Data
  "#FF7A1A", // Infra
  "#36E0C0", // Observability
  "#FFD166", // AI & ML
];

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
  const openDrawer = useContactDrawer((s) => s.openDrawer);
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,224,124,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.stack.eyebrow}</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            {t.stack.title1}<br />
            <span className="text-gradient">{t.stack.title2}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t.stack.intro}</p>
        </div>
      </section>

      {/* Stack Layers — Visual tower */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative space-y-3">
            {/* Connector line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent -translate-x-1/2 hidden md:block" />

            {t.stack.layers.map((l, i) => {
              const Icon = LAYER_ICONS[i];
              const color = LAYER_COLORS[i];
              return (
                <motion.div
                  key={l.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid md:grid-cols-[1fr_64px_1fr] gap-4 items-center"
                >
                  {/* Content */}
                  <div className={`${i % 2 === 0 ? "md:text-right md:order-1" : "md:order-3"}`}>
                    <div className="rounded-2xl border border-border/60 bg-surface/40 p-6 md:p-8 backdrop-blur-sm hover:border-border transition-colors">
                      <div className="flex items-center gap-3 md:justify-end" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                        <span className="text-xs font-mono uppercase tracking-widest" style={{ color }}>{l.title}</span>
                        <Icon className="h-4 w-4" style={{ color }} />
                      </div>
                      <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        {l.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border/60 bg-background/40 px-3.5 py-1.5 text-sm font-mono transition-colors hover:border-border"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex md:order-2 justify-center">
                    <div
                      className="h-10 w-10 rounded-full border-2 flex items-center justify-center relative z-10 bg-background"
                      style={{ borderColor: color }}
                    >
                      <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
                    </div>
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className={`hidden md:block ${i % 2 === 0 ? "md:order-3" : "md:order-1"}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Decision framework</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            How we choose <span className="text-gradient">what to use.</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { title: "Production-tested", desc: "We don't experiment on client projects. Every tool in this list has shipped to production multiple times." },
              { title: "Team velocity", desc: "If it doesn't make the team faster within two weeks, it doesn't make the list. Learning curves matter." },
              { title: "Escape hatches", desc: "We evaluate how hard it is to leave. No framework without a documented migration path." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border/60 bg-surface/30 p-6"
              >
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
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
            onClick={() => openDrawer("stack-cta")}
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
