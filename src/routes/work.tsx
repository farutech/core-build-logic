import { createFileRoute } from "@tanstack/react-router";
import { Work as WorkSection } from "@/components/home/Work";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — FaruTech" },
      { name: "description", content: "Platforms we've shipped — and what they had to survive." },
      { property: "og:title", content: "Work — FaruTech" },
      { property: "og:description", content: "Selected case studies across fintech, logistics and health." },
    ],
  }),
  component: () => (
    <div>
      <section className="pt-32 md:pt-44 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Work</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            Platforms <span className="text-gradient">in production.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            A selection of the systems we've shipped — what we built, what it had to survive, what the impact looked like.
          </p>
        </div>
      </section>
      <WorkSection />
    </div>
  ),
});
