import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/primitives/Logo";
import { LanguageSwitcher } from "@/components/primitives/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { useT } from "@/i18n/useT";
import { Menu, X, ChevronDown, Boxes, Layers, Cpu, Sparkles, Workflow, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { capabilityVisuals } from "@/lib/capabilityConfig";

type Slug =
  | "product-engineering"
  | "saas-platforms"
  | "architecture-consulting"
  | "ux-engineering"
  | "automation-integrations";

const SOLUTION_META: { slug: Slug; to: string; Icon: LucideIcon }[] = [
  { slug: "product-engineering", to: "/capabilities/product-engineering", Icon: Boxes },
  { slug: "saas-platforms", to: "/capabilities/saas-platforms", Icon: Layers },
  { slug: "architecture-consulting", to: "/capabilities/architecture-consulting", Icon: Cpu },
  { slug: "ux-engineering", to: "/capabilities/ux-engineering", Icon: Sparkles },
  { slug: "automation-integrations", to: "/capabilities/automation-integrations", Icon: Workflow },
];

export function Header() {
  const openDrawer = useContactDrawer((s) => s.openDrawer);
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [hovered, setHovered] = useState<Slug>("product-engineering");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const NAV = [
    { to: "/methodology", label: t.nav.methodology },
    { to: "/work", label: t.nav.work },
    { to: "/stack", label: t.nav.stack },
    { to: "/studio", label: t.nav.studio },
    { to: "/careers", label: t.nav.careers },
  ] as const;

  const solutions = SOLUTION_META.map((s) => ({ ...s, ...t.capabilities.items[s.slug] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled || solutionsOpen ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          <span className="text-base font-semibold tracking-tight">FaruTech</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
            <button
              className={cn(
                "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors",
                solutionsOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
              aria-expanded={solutionsOpen}
            >
              {t.nav.solutions}
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", solutionsOpen && "rotate-180")} />
            </button>

            {solutionsOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="w-[640px] rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="px-3 pb-2 pt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                    {t.nav.solutionsTag}
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        to={s.to}
                        onClick={() => setSolutionsOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                      >
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-border">
                          <s.Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-foreground">{s.title}</div>
                          <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/capabilities"
                    onClick={() => setSolutionsOpen(false)}
                    className="mt-1 flex items-center justify-between rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                  >
                    {t.nav.solutionsAll}
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Button
            onClick={() => openDrawer("header")}
            size="sm"
            className="hidden lg:inline-flex bg-foreground text-background hover:bg-foreground/90"
          >
            {t.nav.cta}
          </Button>
          <button
            className="lg:hidden rounded-md p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.toggleMenu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4">
            <div className="pb-1 pt-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              {t.nav.solutions}
            </div>
            {solutions.map((s) => (
              <Link
                key={s.slug}
                to={s.to}
                className="flex items-center gap-3 py-2.5 text-sm text-foreground"
                onClick={() => setOpen(false)}
              >
                <s.Icon className="h-4 w-4 text-primary" />
                {s.title}
              </Link>
            ))}
            <div className="mt-2 border-t border-border" />
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-sm text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <Button
                onClick={() => {
                  openDrawer("mobile-nav");
                  setOpen(false);
                }}
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                {t.nav.cta}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
