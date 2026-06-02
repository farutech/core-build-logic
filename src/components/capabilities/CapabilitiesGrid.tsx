import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { GlowCard } from "@/components/primitives/GlowCard";
import { useT } from "@/i18n/useT";
import { distributeRows } from "@/lib/distributeRows";
import { capabilityVisuals } from "@/lib/capabilityConfig";
import { Boxes, Layers, Cpu, Sparkles, Workflow, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

type Slug =
  | "product-engineering"
  | "saas-platforms"
  | "architecture-consulting"
  | "ux-engineering"
  | "automation-integrations";

const ICONS: Record<Slug, LucideIcon> = {
  "product-engineering": Boxes,
  "saas-platforms": Layers,
  "architecture-consulting": Cpu,
  "ux-engineering": Sparkles,
  "automation-integrations": Workflow,
};

const ROUTES: Record<Slug, string> = {
  "product-engineering": "/capabilities/product-engineering",
  "saas-platforms": "/capabilities/saas-platforms",
  "architecture-consulting": "/capabilities/architecture-consulting",
  "ux-engineering": "/capabilities/ux-engineering",
  "automation-integrations": "/capabilities/automation-integrations",
};

const SLUGS: Slug[] = [
  "product-engineering",
  "saas-platforms",
  "architecture-consulting",
  "ux-engineering",
  "automation-integrations",
];

/**
 * Adaptive grid: distributes N items across rows with no empty cells.
 * Defaults to max 3 per row but the homepage compact view uses 4.
 */
export function CapabilitiesGrid({ maxPerRow = 3, dense = false }: { maxPerRow?: number; dense?: boolean }) {
  const t = useT();
  const items = SLUGS.map((s) => ({
    slug: s,
    Icon: ICONS[s],
    to: ROUTES[s],
    ...t.capabilities.items[s],
  }));

  const rows = useMemo(() => distributeRows(items.length, maxPerRow), [items.length, maxPerRow]);

  let cursor = 0;
  return (
    <div className="space-y-4">
      {rows.map((count, rowIdx) => {
        const slice = items.slice(cursor, cursor + count);
        cursor += count;
        return (
          <div
            key={rowIdx}
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
          >
            {slice.map((c) => (
              <GlowCard key={c.slug}>
                <Link to={c.to} className="block h-full p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-border">
                      <c.Icon className="h-5 w-5 text-primary" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                  </div>
                  <h3 className={`mt-6 font-display font-semibold tracking-tight ${dense ? "text-xl" : "text-2xl"}`}>
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  {!dense && c.bullets.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {c.bullets.map((b) => (
                        <li key={b} className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground">
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
              </GlowCard>
            ))}
          </div>
        );
      })}
    </div>
  );
}
