import { Button } from "@/components/ui/button";
import { useContactDrawer } from "@/stores/useContactDrawer";
import { useT } from "@/i18n/useT";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const openDrawer = useContactDrawer((s) => s.openDrawer);
  const t = useT();

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-12 md:p-20 text-center noise">
          <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
              {t.finalCTA.title1}<br />
              <span className="text-gradient">{t.finalCTA.title2}</span>
            </h2>
            <p className="mt-6 max-w-md mx-auto text-muted-foreground">{t.finalCTA.sub}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                onClick={() => openDrawer("final-cta")}
                className="bg-foreground text-background hover:bg-foreground/90 h-12 px-6 rounded-full"
              >
                {t.finalCTA.primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">{t.finalCTA.or}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
