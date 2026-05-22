import { createFileRoute } from "@tanstack/react-router";

const VALUES = [
  { title: "Code is craft", desc: "Tailored software solutions, written by people who care how the inside looks." },
  { title: "Shipping > perfection", desc: "Production teaches more than planning. We ship to learn, then we polish." },
  { title: "Ownership & autonomy", desc: "Every engineer owns their slice end-to-end. No relays, no finger-pointing." },
  { title: "Continuous learning", desc: "We treat the stack as a moving target. Curiosity is mandatory." },
];

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — FaruTech" },
      { name: "description", content: "An engineering-first collective building modern digital platforms." },
      { property: "og:title", content: "Studio — FaruTech" },
      { property: "og:description", content: "Who we are, what we believe, how we work." },
    ],
  }),
  component: () => (
    <div>
      <section className="pt-32 md:pt-44 pb-20 relative noise overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Studio</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            An engineering-first<br />
            <span className="text-gradient">collective.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We're a small group of engineers, designers and architects who got tired of consulting theater. We build serious software for teams that need it to actually work — at scale, in production, on Monday morning.
          </p>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">What we believe</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Four ideas that<br />
            <span className="text-gradient">we don't compromise on.</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background/60 p-8">
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Footprint</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Distributed by design.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            A remote-first engineering org with people across the Americas and Europe — overlapping time zones, async by default, deeply collaborative.
          </p>
        </div>
      </section>
    </div>
  ),
});
