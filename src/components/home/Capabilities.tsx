import { CapabilitiesGrid } from "@/components/capabilities/CapabilitiesGrid";
import { useT } from "@/i18n/useT";

export function Capabilities() {
  const t = useT();
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {t.capabilities.eyebrow}
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
              {t.capabilities.title1}<br />
              <span className="text-gradient">{t.capabilities.title2}</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">{t.capabilities.sub}</p>
        </div>

        <CapabilitiesGrid maxPerRow={3} />
      </div>
    </section>
  );
}
