import { createFileRoute } from "@tanstack/react-router";

const LAYERS = [
  { title: "Frontend", items: ["React", "TypeScript", "TanStack Start", "Next.js", "Tailwind", "Framer Motion", "Radix", "shadcn/ui"] },
  { title: "Backend", items: ["Node.js", "tRPC", "Hono", "Fastify", "Go", "Python", "Zod", "Prisma"] },
  { title: "Data", items: ["Postgres", "Redis", "ClickHouse", "Kafka", "DuckDB", "Pinecone", "S3"] },
  { title: "Infra", items: ["AWS", "GCP", "Cloudflare", "Vercel", "Kubernetes", "Terraform", "Pulumi", "Docker"] },
  { title: "Observability", items: ["OpenTelemetry", "Datadog", "Grafana", "Sentry", "Posthog"] },
  { title: "AI & ML", items: ["OpenAI", "Anthropic", "LangGraph", "Inngest", "Replicate"] },
];

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — FaruTech" },
      { name: "description", content: "The tools we reach for first — and the criteria behind each choice." },
      { property: "og:title", content: "Stack — FaruTech" },
      { property: "og:description", content: "Opinionated, justified, replaceable." },
    ],
  }),
  component: () => (
    <div>
      <section className="pt-32 md:pt-44 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Stack</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            Opinionated.<br />
            <span className="text-gradient">Justified. Replaceable.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            We default to a focused stack so we can move fast. We deviate when the problem calls for it — and we document why. Nothing here is sacred.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid gap-4 md:grid-cols-2">
          {LAYERS.map((l) => (
            <div key={l.title} className="rounded-2xl border border-border bg-surface/40 p-8">
              <div className="text-xs font-mono uppercase tracking-widest text-primary">{l.title}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {l.items.map((i) => (
                  <span key={i} className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-sm font-mono">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
});
