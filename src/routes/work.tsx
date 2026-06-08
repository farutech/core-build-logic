import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/useT";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import fintechImg from "@/assets/work-fintech.jpg";
import logisticsImg from "@/assets/work-logistics.jpg";
import healthImg from "@/assets/work-health.jpg";

const CASE_IMAGES = [fintechImg, logisticsImg, healthImg];
const CASE_ACCENT = ["#3FC1FF", "#22E07C", "#B66BFF"];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work · FaruTech" },
      { name: "description", content: "Platforms we've shipped, and what they had to survive." },
      { property: "og:title", content: "Work · FaruTech" },
      { property: "og:description", content: "Selected case studies across fintech, logistics and health." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const t = useT();
  const openDrawer = useContactDrawer((s) => s.openDrawer);
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(63,193,255,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {t.work.pageEyebrow}
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] max-w-4xl">
            {t.work.title1} <span className="text-gradient">{t.work.title2}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">{t.work.pageIntro}</p>
        </div>
      </section>

      {/* Case Studies, Editorial zigzag */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 space-y-24 md:space-y-32">
          {t.work.cases.map((c, i) => {
            const isEven = i % 2 === 0;
            const accent = CASE_ACCENT[i];
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Image */}
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img
                      src={CASE_IMAGES[i]}
                      alt={c.title}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div
                      className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-mono font-medium backdrop-blur-md"
                      style={{ backgroundColor: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? "md:order-2" : "md:order-1"}>
                  <span className="text-xs font-mono uppercase tracking-widest" style={{ color: accent }}>
                    {c.tag}
                  </span>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-base">{c.desc}</p>

                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="font-display text-4xl font-semibold" style={{ color: accent }}>
                      {c.metric}
                    </span>
                    <span className="text-sm text-muted-foreground">{c.metricLabel}</span>
                  </div>

                  <button
                    onClick={() => openDrawer(`work:${c.title}`)}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: accent }}
                  >
                    Discuss this project <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            {t.finalCTA.title1} <span className="text-gradient">{t.finalCTA.title2}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">{t.finalCTA.sub}</p>
          <Button
            onClick={() => openDrawer("work-cta")}
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
