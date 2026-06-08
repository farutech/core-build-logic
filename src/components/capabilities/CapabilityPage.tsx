import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { useT } from "@/i18n/useT";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { capabilityVisuals, type CapabilitySlug } from "@/lib/capabilityConfig";
import { CapabilityMotif, HeroFrame } from "@/components/capabilities/CapabilityMotif";
import type { CSSProperties } from "react";

export interface CapabilityPageProps {
  slug: CapabilitySlug;
  Icon: LucideIcon;
  stack: string[];
}

export function CapabilityPage({ slug, stack }: CapabilityPageProps) {
  const t = useT();
  const p = t.capabilityPages[slug];
  const chrome = t.capabilityPage;
  const visual = capabilityVisuals[slug];
  const openDrawer = useContactDrawer((s) => s.openDrawer);

  const accentStyle = {
    "--cap-accent": visual.accent,
    "--cap-accent2": visual.accent2,
    "--cap-glow": visual.glow,
  } as CSSProperties;

  const imageFirst = visual.layout === "right";

  const metrics = visual.metrics.map((m, i) => ({
    value: m.value,
    label: p.metrics[i]?.label ?? "",
  }));

  return (
    <div style={accentStyle}>
      {/* Hero — image-driven, accent per page */}
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 noise">
        {/* Accent wash unique to this capability */}
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(70% 55% at 75% 5%, var(--cap-glow) 0%, transparent 65%)",
          }}
        />
        {/* Personality motif */}
        <CapabilityMotif variant={visual.motif} />

        {/* Vertical signature stamp */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 font-display text-[10px] font-semibold uppercase tracking-[0.5em] xl:block"
          style={{
            writingMode: "vertical-rl",
            color: "color-mix(in oklab, var(--cap-accent) 50%, transparent)",
          }}
        >
          {visual.signature}
        </span>

        <div className="mx-auto max-w-7xl px-6 relative">
          <Link
            to="/capabilities"
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            {chrome.back}
          </Link>

          <div
            className={`mt-8 grid items-center gap-10 lg:gap-14 lg:grid-cols-2 ${
              visual.layout === "centered" ? "lg:grid-cols-1" : ""
            }`}
          >
            {/* Copy block */}
            <div className={imageFirst ? "lg:order-2" : ""}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 backdrop-blur">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--cap-accent)" }}
                />
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--cap-accent)" }}>
                  {p.eyebrow}
                </span>
              </div>

              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight">
                {p.title}
                <br />
                <span
                  style={{
                    background: `linear-gradient(120deg, var(--cap-accent), color-mix(in oklab, var(--cap-accent) 55%, white))`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {p.highlight}
                </span>
              </h1>

              <p className="mt-3 text-sm font-medium text-muted-foreground/80">{p.segment}</p>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">{p.intro}</p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  onClick={() => openDrawer(slug)}
                  className="h-12 rounded-full px-6 text-background hover:opacity-90"
                  style={{ background: "var(--cap-accent)" }}
                >
                  {p.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Image block — the per-page identity */}
            <div className={imageFirst ? "lg:order-1" : ""}>
              <div
                className="relative"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(72% 72% at 50% 45%, #000 12%, transparent 70%)",
                  maskImage:
                    "radial-gradient(72% 72% at 50% 45%, #000 12%, transparent 70%)",
                }}
              >
                <img
                  src={visual.image}
                  alt={p.title + " " + p.highlight}
                  width={1920}
                  height={1080}
                  className="aspect-[16/10] w-full object-contain mix-blend-screen"
                />
              </div>
            </div>
          </div>

          {/* Metrics band */}
          <div className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {metrics.map((m) => (
              <div key={m.label} className="bg-surface/40 px-5 py-6 text-center sm:text-left">
                <div
                  className="font-display text-3xl md:text-4xl font-semibold tracking-tight"
                  style={{ color: "var(--cap-accent)" }}
                >
                  {m.value}
                </div>
                <div className="mt-1.5 text-xs text-muted-foreground leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 border-y border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{chrome.problemsEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
            {chrome.problemsTitle}
          </h2>
          <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-background/40 overflow-hidden">
            {p.problems.map((x, i) => (
              <div key={x.title} className="group flex flex-col gap-2 px-6 py-6 transition-colors hover:bg-surface/40 md:flex-row md:items-center md:gap-8">
                <span className="font-mono text-sm md:w-10" style={{ color: "var(--cap-accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-lg font-semibold md:w-64 md:shrink-0">{x.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed md:flex-1">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{chrome.solutionsEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
            {chrome.solutionsTitle1}{" "}
            <span style={{ color: "var(--cap-accent)" }}>{chrome.solutionsTitle2}</span>
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {p.solutions.map((x) => (
              <div key={x.title} className="relative bg-surface/30 p-8 transition-colors hover:bg-surface/60">
                <div className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full" style={{ background: "var(--cap-accent)" }} />
                <h3 className="font-display text-lg font-semibold pr-6">{x.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 border-y border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{chrome.stackEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
            {chrome.stackTitle}
          </h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-mono">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{chrome.useCasesEyebrow}</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
            {chrome.useCasesTitle}
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {p.useCases.map((x) => (
              <div key={x.title} className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-8">
                <div
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: "var(--cap-accent)" }}
                />
                <h3 className="font-display text-lg font-semibold">{x.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(60% 80% at 50% 100%, var(--cap-glow) 0%, transparent 60%)" }}
        />
        <div className="mx-auto max-w-3xl px-6 text-center relative">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            {p.cta}
          </h2>
          <Button
            size="lg"
            onClick={() => openDrawer(slug)}
            className="mt-8 h-12 rounded-full px-6 text-background hover:opacity-90"
            style={{ background: "var(--cap-accent)" }}
          >
            {chrome.ctaButton}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
