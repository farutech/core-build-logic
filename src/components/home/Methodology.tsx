import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useT } from "@/i18n/useT";

export function Methodology({ showHeader = true }: { showHeader?: boolean }) {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="methodology" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {showHeader && (
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {t.methodology.eyebrow}
              </div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                {t.methodology.title1}<br />{t.methodology.title2} <span className="text-gradient">{t.methodology.titleAccent}</span>
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">{t.methodology.sub}</p>
          </div>
        )}


        <div ref={ref} className="relative">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[28px] md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2"
          />

          <div className="space-y-16">
            {t.methodology.steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
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
