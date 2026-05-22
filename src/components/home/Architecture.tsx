import { motion } from "framer-motion";

export function Architecture() {
  return (
    <section className="relative py-28 border-y border-border bg-surface/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              03 — Architecture
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              We don't ship monoliths<br />
              <span className="text-gradient">by accident.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A representative slice of how we build modern, observable, multi-region
            SaaS platforms.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-border bg-background/70 backdrop-blur-sm p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
          <svg viewBox="0 0 900 480" className="relative w-full h-auto">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.78 0.16 220)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="oklch(0.78 0.2 155)" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connections */}
            <g stroke="url(#g1)" strokeWidth="1.5" fill="none" opacity="0.7">
              <path d="M 130 240 L 280 100" />
              <path d="M 130 240 L 280 240" />
              <path d="M 130 240 L 280 380" />
              <path d="M 380 100 L 540 240" />
              <path d="M 380 240 L 540 240" />
              <path d="M 380 380 L 540 240" />
              <path d="M 640 240 L 790 140" />
              <path d="M 640 240 L 790 240" />
              <path d="M 640 240 L 790 340" />
            </g>

            {/* Animated pulses */}
            {[0, 1, 2].map((i) => (
              <circle key={i} r="3" fill="oklch(0.88 0.18 195)" filter="url(#glow)">
                <animateMotion
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                  path={`M 130 240 L 280 ${100 + i * 140} L 380 ${100 + i * 140} L 540 240 L 640 240 L 790 ${140 + i * 100}`}
                />
              </circle>
            ))}

            {/* Nodes */}
            <Node x={80} y={210} label="Edge" sub="CDN · WAF" />
            <Node x={280} y={70} label="Web App" sub="React · TS" />
            <Node x={280} y={210} label="Mobile" sub="React Native" />
            <Node x={280} y={350} label="API Clients" sub="Public SDK" />
            <Node x={490} y={210} label="API Gateway" sub="Auth · Rate · Logs" big />
            <Node x={640} y={210} label="Services" sub="Bounded contexts" big />
            <Node x={790} y={110} label="Postgres" sub="Multi-tenant" />
            <Node x={790} y={210} label="Queue" sub="Events · Jobs" />
            <Node x={790} y={310} label="Observability" sub="OTel · Logs" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

function Node({ x, y, label, sub, big = false }: { x: number; y: number; label: string; sub: string; big?: boolean }) {
  const w = big ? 130 : 100;
  const h = 56;
  return (
    <g transform={`translate(${x - w / 2} ${y - h / 2})`}>
      <rect
        width={w}
        height={h}
        rx="10"
        fill="oklch(0.16 0.018 250)"
        stroke="oklch(1 0 0 / 0.12)"
        strokeWidth="1"
      />
      <text x={w / 2} y={22} textAnchor="middle" fill="oklch(0.97 0.005 250)" fontSize="11" fontWeight="600" fontFamily="ui-sans-serif">
        {label}
      </text>
      <text x={w / 2} y={40} textAnchor="middle" fill="oklch(0.65 0.015 250)" fontSize="9" fontFamily="ui-monospace">
        {sub}
      </text>
    </g>
  );
}
