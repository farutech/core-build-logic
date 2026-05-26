import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/primitives/Logo";
import { useT } from "@/i18n/useT";

export function Footer() {
  const t = useT();
  const COLS = [
    {
      title: t.footer.capabilities,
      links: [
        { to: "/capabilities/product-engineering", label: t.capabilities.items["product-engineering"].title },
        { to: "/capabilities/saas-platforms", label: t.capabilities.items["saas-platforms"].title },
        { to: "/capabilities/architecture-consulting", label: t.capabilities.items["architecture-consulting"].title },
        { to: "/capabilities/ux-engineering", label: t.capabilities.items["ux-engineering"].title },
        { to: "/capabilities/automation-integrations", label: t.capabilities.items["automation-integrations"].title },
      ],
    },
    {
      title: t.footer.company,
      links: [
        { to: "/studio", label: t.nav.studio },
        { to: "/methodology", label: t.nav.methodology },
        { to: "/stack", label: t.nav.stack },
        { to: "/work", label: t.nav.work },
        { to: "/careers", label: t.nav.careers },
      ],
    },
  ] as const;

  return (
    <footer className="relative border-t border-border bg-surface/40 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-base font-semibold tracking-tight">FaruTech</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.tagline}</p>
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
              {t.footer.contact}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>hello@farutech.com</li>
              <li>{t.footer.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FaruTech. {t.footer.rights}
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">{t.footer.privacy}</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">{t.footer.terms}</Link>
            <Link to="/security" className="hover:text-foreground transition-colors">{t.footer.security}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
