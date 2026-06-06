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

  // Preload all solution images once so the mega-menu preview swaps instantly.
  useEffect(() => {
    SOLUTION_META.forEach(({ slug }) => {
      const img = new Image();
      img.src = capabilityVisuals[slug].image;
    });
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
        scrolled || solutionsOpen ? "border-b border-border bg-background/95 shadow-lg shadow-background/30 backdrop-blur-xl" : "bg-transparent",
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
              <div className="fixed left-1/2 top-[64px] -translate-x-1/2 pt-3">
                <div className="w-[760px] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
                  <div className="grid grid-cols-[1.15fr_0.85fr]">
                    {/* List */}
                    <div className="p-3">
                      <div className="px-3 pb-2 pt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70">
                        {t.nav.solutionsTag}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {solutions.map((s) => {
                          const v = capabilityVisuals[s.slug];
                          return (
                            <Link
                              key={s.slug}
                              to={s.to}
                              onMouseEnter={() => setHovered(s.slug)}
                              onClick={() => setSolutionsOpen(false)}
                              className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                            >
                              <div
                                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5"
                              >
                                <s.Icon className="h-4 w-4" style={{ color: v.accent }} />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-foreground">{s.title}</div>
                                <div className="mt-0.5 line-clamp-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <Link
                        to="/capabilities"
                        onClick={() => setSolutionsOpen(false)}
                        className="mt-1 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
                      >
                        {t.nav.solutionsAll}
                        <ArrowUpRight className="h-4 w-4 text-primary" />
                      </Link>
                    </div>

                    {/* Featured preview — all images stacked & preloaded for instant swap */}
                    <Link
                      to={solutions.find((s) => s.slug === hovered)?.to ?? "/capabilities"}
                      onClick={() => setSolutionsOpen(false)}
                      className="relative m-3 overflow-hidden rounded-xl"
                    >
                      {SOLUTION_META.map(({ slug }) => (
                        <img
                          key={slug}
                          src={capabilityVisuals[slug].image}
                          alt={t.capabilities.items[slug].title}
                          className={cn(
                            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
                            slug === hovered ? "opacity-100" : "opacity-0",
                          )}
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <div
                          className="mb-2 h-1 w-10 rounded-full"
                          style={{ background: capabilityVisuals[hovered].accent }}
                        />
                        <div className="text-sm font-semibold text-foreground">
                          {t.capabilities.items[hovered].title}
                        </div>
                        <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                          {t.capabilities.items[hovered].desc}
                        </div>
                      </div>
                    </Link>
                  </div>
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
