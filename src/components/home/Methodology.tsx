import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    desc: "We map your real constraints — technical, organizational, financial. Output: a buildable scope, not a slide deck.",
    out: "Scope doc · Risk map · Tech proposal",
  },
  {
    n: "02",
    title: "Architecture",
    desc: "Data model, infra topology, integration surface. Decided before code, documented as ADRs.",
    out: "System diagram · ADRs · Stack rationale",
  },
  {
    n: "03",
    title: "Design",
    desc: "Component system, interaction patterns, motion language. Designed in code, not in Figma alone.",
    out: "Design system · Prototypes · UI kit",
  },
  {
    n: "04",
    title: "Build",
    desc: "2-week sprints. Trunk-based. Continuous deploy to staging from day one. You see it growing.",
    out: "Production releases · Test coverage · Observability",
  },
  {
    n: "05",
    title: "Scale",
    desc: "Performance budgets, load tests, cost reviews. Handover with runbooks or stay as your platform team.",
    out: "SLOs · Runbooks · Cost optimization",
  },
];

export function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="methodology" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              02 — Methodology
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              How we go from blank<br />repo to <span className="text-gradient">production</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A process built for systems that have to survive their first 10x —
            not for slide decks that have to survive procurement.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[28px] md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2"
          />

          <div className="space-y-16">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Node */}
                <div className="absolute left-[28px] md:left-1/2 top-2 -translate-x-1/2 z-10">
                  <div className="h-4 w-4 rounded-full bg-background border-2 border-primary glow-cyan" />
                </div>

                <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="font-mono text-xs text-primary">{s.n}</div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <div className="inline-block rounded-xl border border-border bg-surface/50 px-4 py-3 font-mono text-xs text-muted-foreground">
                    {s.out}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
