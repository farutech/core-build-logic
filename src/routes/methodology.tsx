import { createFileRoute } from "@tanstack/react-router";
import { Methodology as MethodologySection } from "@/components/home/Methodology";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Methodology — FaruTech" },
      { name: "description", content: "Discovery to scale: how we move from blank repo to production." },
      { property: "og:title", content: "Methodology — FaruTech" },
      { property: "og:description", content: "Five stages. No theater. Built for systems that have to survive growth." },
    ],
  }),
  component: () => (
    <div className="pt-20">
      <section className="pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Methodology</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            From discovery<br />
            <span className="text-gradient">to scale.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            A process built for systems that have to survive their first 10x — not for slide decks that have to survive procurement.
          </p>
        </div>
      </section>
      <MethodologySection />
    </div>
  ),
});
