import { motion } from "framer-motion";
import { useT } from "@/i18n/useT";

/* ---- Layout model: shared columns/rows so lines and nodes always align ---- */
const NODE_W = 104;
const BIG_W = 132;
const NODE_H = 56;

// Column centers (x) and row centers (y)
const COL = { edge: 92, client: 292, gateway: 472, services: 652, data: 832 };
const ROW = { top: 110, mid: 240, bottom: 370 };

type N = { x: number; y: number; label: string; sub: string; big?: boolean };

const NODES: N[] = [
  { x: COL.edge, y: ROW.mid, label: "Edge", sub: "CDN · WAF" },
  { x: COL.client, y: ROW.top, label: "Web App", sub: "React · TS" },
  { x: COL.client, y: ROW.mid, label: "Mobile", sub: "React Native" },
  { x: COL.client, y: ROW.bottom, label: "API Clients", sub: "Public SDK" },
  { x: COL.gateway, y: ROW.mid, label: "API Gateway", sub: "Auth · Rate · Logs", big: true },
  { x: COL.services, y: ROW.mid, label: "Services", sub: "Bounded contexts", big: true },
  { x: COL.data, y: ROW.top, label: "Postgres", sub: "Multi-tenant" },
  { x: COL.data, y: ROW.mid, label: "Queue", sub: "Events · Jobs" },
  { x: COL.data, y: ROW.bottom, label: "Observability", sub: "OTel · Logs" },
];

const halfW = (big?: boolean) => (big ? BIG_W : NODE_W) / 2;

// edge points: right side of source, left side of target
const link = (a: N, b: N) => ({
  x1: a.x + halfW(a.big),
  y1: a.y,
  x2: b.x - halfW(b.big),
  y2: b.y,
});

const EDGE = NODES[0];
const WEB = NODES[1];
const MOB = NODES[2];
const CLI = NODES[3];
const GW = NODES[4];
const SVC = NODES[5];
const PG = NODES[6];
const QUE = NODES[7];
const OBS = NODES[8];

const LINKS = [
  link(EDGE, WEB),
  link(EDGE, MOB),
  link(EDGE, CLI),
  link(WEB, GW),
  link(MOB, GW),
  link(CLI, GW),
  link(GW, SVC),
  link(SVC, PG),
  link(SVC, QUE),
  link(SVC, OBS),
];

export function Architecture() {
  const t = useT();
  return (
    <section className="relative py-28 border-y border-border bg-surface/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {t.architecture.eyebrow}
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              {t.architecture.title1}<br />
              <span className="text-gradient">{t.architecture.title2}</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">{t.architecture.sub}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Desktop / tablet: precisely-aligned SVG flow */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-glow opacity-30 pointer-events-none" />
            <svg viewBox="0 0 924 480" className="relative w-full h-auto">
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="oklch(0.78 0.16 220)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="oklch(0.78 0.2 155)" stopOpacity="0.55" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g stroke="url(#g1)" strokeWidth="1.5" fill="none" opacity="0.75">
                {LINKS.map((l, i) => (
                  <path key={i} d={`M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`} />
                ))}
              </g>

              {[ROW.top, ROW.mid, ROW.bottom].map((row, i) => (
                <circle key={i} r="3" fill="oklch(0.88 0.18 195)" filter="url(#glow)">
                  <animateMotion
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M ${COL.edge} ${ROW.mid} L ${COL.client} ${row} L ${COL.gateway} ${ROW.mid} L ${COL.services} ${ROW.mid} L ${COL.data} ${row}`}
                  />
                </circle>
              ))}

              {NODES.map((n) => (
                <Node key={n.label} {...n} />
              ))}
            </svg>
          </div>

          {/* Mobile: fluid vertical flow, no enclosing frames */}
          <div className="md:hidden">
            <MobileFlow />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Node({ x, y, label, sub, big = false }: N) {
  const w = big ? BIG_W : NODE_W;
  const h = NODE_H;
  return (
    <g transform={`translate(${x - w / 2} ${y - h / 2})`}>
      <rect width={w} height={h} rx="10" fill="oklch(0.16 0.018 250)" stroke="oklch(1 0 0 / 0.12)" strokeWidth="1" />
      <text x={w / 2} y={22} textAnchor="middle" fill="oklch(0.97 0.005 250)" fontSize="11" fontWeight="600" fontFamily="ui-sans-serif">{label}</text>
      <text x={w / 2} y={40} textAnchor="middle" fill="oklch(0.65 0.015 250)" fontSize="9" fontFamily="ui-monospace">{sub}</text>
    </g>
  );
}

/* Mobile: grouped layers connected by a single flowing line — open, not boxed-in */
function MobileFlow() {
  const groups: { tier: string; items: { label: string; sub: string }[] }[] = [
    { tier: "Edge", items: [{ label: "Edge", sub: "CDN · WAF" }] },
    {
      tier: "Clients",
      items: [
        { label: "Web App", sub: "React · TS" },
        { label: "Mobile", sub: "React Native" },
        { label: "API Clients", sub: "Public SDK" },
      ],
    },
    { tier: "Gateway", items: [{ label: "API Gateway", sub: "Auth · Rate · Logs" }] },
    { tier: "Services", items: [{ label: "Services", sub: "Bounded contexts" }] },
    {
      tier: "Data",
      items: [
        { label: "Postgres", sub: "Multi-tenant" },
        { label: "Queue", sub: "Events · Jobs" },
        { label: "Observability", sub: "OTel · Logs" },
      ],
    },
  ];

  return (
    <div className="relative pl-6">
      {/* flowing spine */}
      <div className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-primary/10" />
      <div className="space-y-8">
        {groups.map((g) => (
          <div key={g.tier} className="relative">
            <span className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(63,193,255,0.6)]" />
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{g.tier}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <div key={it.label} className="rounded-lg bg-surface/60 px-3 py-2">
                  <div className="text-sm font-medium text-foreground">{it.label}</div>
                  <div className="text-[11px] font-mono text-muted-foreground">{it.sub}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
