import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/primitives/Logo";

const COLS = [
  {
    title: "Capabilities",
    links: [
      { to: "/capabilities/product-engineering", label: "Product Engineering" },
      { to: "/capabilities/saas-platforms", label: "SaaS Platforms" },
      { to: "/capabilities/architecture-consulting", label: "Architecture" },
      { to: "/capabilities/ux-engineering", label: "UX Engineering" },
      { to: "/capabilities/automation-integrations", label: "Automation" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/studio", label: "Studio" },
      { to: "/methodology", label: "Methodology" },
      { to: "/stack", label: "Stack" },
      { to: "/work", label: "Work" },
      { to: "/careers", label: "Careers" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-base font-semibold tracking-tight">FaruTech</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Engineering the digital frontier. We build platforms that have to scale —
              for real.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>hello@farutech.com</li>
              <li>Remote · LATAM · Global</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FaruTech. Engineering the digital frontier.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
