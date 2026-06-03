import { createFileRoute } from "@tanstack/react-router";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/useT";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Zap, Heart, Globe, Coffee, Laptop, CalendarDays, Briefcase } from "lucide-react";

const PERK_ICONS = [MapPin, Zap, Heart, Globe, Coffee, Laptop, CalendarDays, Briefcase];
const PERKS = [
  "Remote-first · async by default",
  "Home office setup budget",
  "Health & wellness stipend",
  "Global coworking access",
  "Learning & conference budget",
  "Latest hardware from day one",
  "Flexible PTO — no count",
  "Equity for senior roles",
];

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
      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,224,124,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.careers.eyebrow}</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] max-w-4xl">
            {t.careers.title1}<br />
            {t.careers.title2} <span className="text-gradient">{t.careers.titleAccent}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">{t.careers.intro}</p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 border-y border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Perks & benefits</div>
          <h2 className="mt-3 font-display text-2xl md:text-4xl font-semibold tracking-tight">Why people stay.</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {PERKS.map((perk, i) => {
              const Icon = PERK_ICONS[i];
              return (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface/30 px-4 py-3"
                >
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{perk}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.careers.rolesEyebrow}</div>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border overflow-hidden bg-surface/20">
            {t.careers.roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-wrap items-center justify-between gap-4 p-6 hover:bg-surface/40 transition-colors group"
              >
                <div>
                  <div className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{r.title}</div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process — Horizontal timeline */}
      <section className="py-20 border-y border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.careers.processEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            {t.careers.processTitle1} <span className="text-gradient">{t.careers.processTitle2}</span>
          </h2>

          <div className="mt-12 relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border" />
            <div className="grid gap-8 md:grid-cols-4 md:gap-6">
              {t.careers.process.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-background border-2 border-primary z-10" />
                  <div className="md:text-center md:pt-10">
                    <div className="font-mono text-xs text-primary">{p.n}</div>
                    <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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