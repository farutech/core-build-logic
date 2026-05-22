const STATS = [
  { value: "10x", label: "Faster delivery" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "50+", label: "Systems shipped" },
  { value: "0", label: "Rewrites in 3 years" },
];

const LOGOS = [
  "AWS", "Vercel", "Supabase", "Stripe", "Kubernetes", "PostgreSQL",
  "Next.js", "React", "TypeScript", "Cloudflare", "Redis", "Terraform",
];

export function ProofBar() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-semibold tracking-tight md:text-5xl text-gradient">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex marquee gap-12 whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <span key={i} className="font-mono text-sm uppercase tracking-widest text-muted-foreground/60">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
