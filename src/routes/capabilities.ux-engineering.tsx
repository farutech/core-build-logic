import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";

export const Route = createFileRoute("/capabilities/ux-engineering")({
  head: () => ({
    meta: [
      { title: "UX Engineering — FaruTech" },
      { name: "description", content: "Interfaces and design systems that scale with your product." },
      { property: "og:title", content: "UX Engineering — FaruTech" },
      { property: "og:description", content: "Where design meets the codebase." },
    ],
  }),
  component: () => (
    <CapabilityPage
      Icon={Sparkles}
      eyebrow="UX Engineering"
      title="Interfaces"
      highlight="that scale with you."
      intro="UX as engineering, not decoration. Design systems, complex interactions, motion and accessibility — built in code so they actually ship."
      problems={[
        { title: "Inconsistent UI", desc: "Every feature looks like a different product." },
        { title: "Design–dev gap", desc: "Figma says one thing, prod ships another." },
        { title: "Complex UI dread", desc: "Tables, builders, editors nobody wants to touch." },
        { title: "A11y as afterthought", desc: "Compliance scrambles before every enterprise deal." },
      ]}
      solutions={[
        { title: "Production design system", desc: "Tokens, components and patterns living in the same repo as the app." },
        { title: "Complex UI specialists", desc: "Spreadsheets, builders, canvases, dashboards — our day job." },
        { title: "Motion as language", desc: "Animation that reinforces hierarchy, not noise." },
        { title: "A11y by default", desc: "WCAG 2.2 AA from the first component." },
      ]}
      stack={["React", "Radix", "shadcn/ui", "Tailwind", "Framer Motion", "GSAP", "Storybook", "Figma"]}
      useCases={[
        { title: "Workflow editor", desc: "Drag-and-drop workflow canvas with 200+ node types and keyboard control." },
        { title: "Multi-brand design system", desc: "Token-driven design system serving 12 product surfaces and 3 brands." },
        { title: "Data-dense dashboards", desc: "Realtime ops dashboards rendering 50k+ rows without jank." },
      ]}
      cta="Let's build an interface worth shipping."
    />
  ),
});
