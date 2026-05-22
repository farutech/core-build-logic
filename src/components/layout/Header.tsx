import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/primitives/Logo";
import { LanguageSwitcher } from "@/components/primitives/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { useLocale } from "@/i18n";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const openDrawer = useContactDrawer((s) => s.openDrawer);
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV = [
    { to: "/capabilities", label: t.nav.capabilities },
    { to: "/methodology", label: t.nav.methodology },
    { to: "/stack", label: t.nav.stack },
    { to: "/work", label: t.nav.work },
    { to: "/studio", label: t.nav.studio },
    { to: "/careers", label: t.nav.careers },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          <span className="text-base font-semibold tracking-tight">FaruTech</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
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
          <LanguageSwitcher className="hidden sm:flex" />
          <Button
            onClick={() => openDrawer("header")}
            size="sm"
            className="hidden md:inline-flex bg-foreground text-background hover:bg-foreground/90"
          >
            {t.nav.startProject}
          </Button>
          <button
            className="md:hidden rounded-md p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4">
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
            <div className="flex items-center justify-between pt-2 border-t border-border mt-2">
              <span className="text-sm text-muted-foreground">Language</span>
              <LanguageSwitcher variant="full" />
            </div>
            <Button
              onClick={() => {
                openDrawer("mobile-nav");
                setOpen(false);
              }}
              className="mt-4 bg-foreground text-background hover:bg-foreground/90"
            >
              {t.nav.startProject}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
