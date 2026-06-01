import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { useT } from "@/i18n/useT";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Slug =
  | "product-engineering"
  | "saas-platforms"
  | "architecture-consulting"
  | "ux-engineering"
  | "automation-integrations";

export interface CapabilityPageProps {
  slug: Slug;
  Icon: LucideIcon;
  stack: string[];
}

export function CapabilityPage({ slug, Icon, stack }: CapabilityPageProps) {
  const t = useT();
  const p = t.capabilityPages[slug];
  const chrome = t.capabilityPage;
  const openDrawer = useContactDrawer((s) => s.openDrawer);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-20 overflow-hidden noise">
        <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <Link to="/capabilities" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground">
            {chrome.back}
          </Link>
          <div className="mt-8 grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">{p.eyebrow}</div>
              <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
                {p.title}<br />
                <span className="text-gradient">{p.highlight}</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">{p.intro}</p>
              <div className="mt-10">
                <Button
                  size="lg"
                  onClick={() => openDrawer(slug)}
                  className="bg-foreground text-background hover:bg-foreground/90 h-12 px-6 rounded-full"
                >
                  {p.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 bg-glow opacity-80" />
                <div className="relative h-full w-full rounded-3xl border border-border bg-surface/40 backdrop-blur flex items-center justify-center">
                  <Icon className="h-20 w-20 text-primary" strokeWidth={1.2} />
                </div>
              </div>
            </div>
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
                <span className="font-mono text-sm text-muted-foreground/60 md:w-10">{String(i + 1).padStart(2, "0")}</span>
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
            {chrome.solutionsTitle1} <span className="text-gradient">{chrome.solutionsTitle2}</span>
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {p.solutions.map((x) => (
              <div key={x.title} className="relative bg-surface/30 p-8 transition-colors hover:bg-surface/60">
                <div className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full bg-accent" />
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
              <div key={x.title} className="rounded-2xl border border-border bg-surface/40 p-8">
                <h3 className="font-display text-lg font-semibold">{x.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            {p.cta}
          </h2>
          <Button
            size="lg"
            onClick={() => openDrawer(slug)}
            className="mt-8 bg-foreground text-background hover:bg-foreground/90 h-12 px-6 rounded-full"
          >
            {chrome.ctaButton}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
