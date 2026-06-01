import { GlowCard } from "@/components/primitives/GlowCard";
import { useT } from "@/i18n/useT";
import { ArrowUpRight } from "lucide-react";

export function Work({ showHeader = true }: { showHeader?: boolean }) {
  const t = useT();
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {showHeader && (
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {t.work.eyebrow}
              </div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
                {t.work.title1} <span className="text-gradient">{t.work.title2}</span>
              </h2>
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-3">
          {t.work.cases.map((c, i) => (
            <GlowCard key={c.title} className="p-8">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <span className="mt-5 text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.tag}</span>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                <div className="mt-8 flex items-baseline gap-2 pt-6 border-t border-border">
                  <span className="font-display text-3xl font-semibold text-gradient">{c.metric}</span>
                  <span className="text-xs text-muted-foreground">{c.metricLabel}</span>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
