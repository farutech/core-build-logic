import { useT } from "@/i18n/useT";

export interface LegalContent {
  title: string;
  intro: string;
  sections: { h: string; p: string }[];
}

export function LegalLayout({ content }: { content: LegalContent }) {
  const t = useT();
  return (
    <div className="pt-32 md:pt-40 pb-24">
      <article className="mx-auto max-w-3xl px-6">
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {t.legal.lastUpdated}: 2026-01-15
        </div>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          {content.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{content.intro}</p>

        <div className="mt-12 space-y-10">
          {content.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">{s.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
