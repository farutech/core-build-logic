import { createFileRoute } from "@tanstack/react-router";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { Button } from "@/components/ui/button";

const ROLES = [
  { title: "Senior Frontend Engineer", tags: ["Remote", "Senior", "Full-time"] },
  { title: "Backend Engineer", tags: ["Remote", "Mid–Senior", "Full-time"] },
  { title: "Platform / SRE Engineer", tags: ["Remote", "Senior", "Full-time"] },
  { title: "Product Designer", tags: ["Hybrid", "Senior", "Full-time"] },
  { title: "Engineering Manager", tags: ["Remote", "Lead", "Full-time"] },
];

const PROCESS = [
  { n: "01", title: "Intro call", desc: "30 min with someone from engineering — not HR. We figure out fit, fast." },
  { n: "02", title: "Technical deep-dive", desc: "Conversation about your actual work. No whiteboard riddles." },
  { n: "03", title: "Pair on real code", desc: "A 2-hour paid pairing session on a real (sanitized) problem." },
  { n: "04", title: "Offer", desc: "Decision within 5 days. Transparent comp, clear leveling." },
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
  const openDrawer = useContactDrawer((s) => s.openDrawer);
  return (
    <div>
      <section className="pt-32 md:pt-44 pb-20 relative noise overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Careers</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            Build the tools<br />
            of <span className="text-gradient">tomorrow, today.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            We hire senior builders who want to ship serious systems with a small, sharp team. Remote-first. Async by default. Real ownership.
          </p>
        </div>
      </section>

      <section className="py-20 border-y border-border bg-surface/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Open roles</div>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border overflow-hidden bg-background/60">
            {ROLES.map((r) => (
              <div key={r.title} className="flex flex-wrap items-center justify-between gap-4 p-6 hover:bg-surface/40 transition-colors">
                <div>
                  <div className="font-display text-lg font-semibold">{r.title}</div>
                  <div className="mt-1 flex gap-2 flex-wrap">
                    {r.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => openDrawer(`careers:${r.title}`)}>
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Hiring process</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Honest. Fast. <span className="text-gradient">No theater.</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border bg-surface/40 p-6">
                <div className="font-mono text-xs text-primary">{p.n}</div>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            Don't see your role?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send us your GitHub or LinkedIn. We hire on signal, not job titles.
          </p>
          <Button
            onClick={() => openDrawer("careers:general")}
            size="lg"
            className="mt-8 bg-foreground text-background hover:bg-foreground/90 h-12 px-6 rounded-full"
          >
            Send your work
          </Button>
        </div>
      </section>
    </div>
  );
}
