import { createFileRoute } from "@tanstack/react-router";
import { Work as WorkSection } from "@/components/home/Work";
import { useT } from "@/i18n/useT";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — FaruTech" },
      { name: "description", content: "Platforms we've shipped — and what they had to survive." },
      { property: "og:title", content: "Work — FaruTech" },
      { property: "og:description", content: "Selected case studies across fintech, logistics and health." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const t = useT();
  return (
    <div>
      <section className="pt-32 md:pt-44 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {t.work.pageEyebrow}
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            {t.work.title1} <span className="text-gradient">{t.work.title2}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">{t.work.pageIntro}</p>
        </div>
      </section>
      <WorkSection showHeader={false} />
    </div>
  );
}
