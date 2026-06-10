import { createFileRoute } from "@tanstack/react-router";
import { buildSeo, faqJsonLd } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { ProofBar } from "@/components/home/ProofBar";
import { Capabilities } from "@/components/home/Capabilities";
import { Methodology } from "@/components/home/Methodology";
import { Architecture } from "@/components/home/Architecture";
import { Work } from "@/components/home/Work";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeo({
      path: "/",
      title: "FaruTech, Engineering the digital frontier",
      description:
        "We build scalable platforms, multi-tenant SaaS and critical systems for teams that can't afford to rewrite. No shortcuts. No tech debt.",
      jsonLd: faqJsonLd([
        {
          question: "What kind of projects does FaruTech take on?",
          answer:
            "We design and build scalable web platforms, multi-tenant SaaS products and critical backend systems, from architecture through production.",
        },
        {
          question: "Do you work with existing codebases or only greenfield?",
          answer:
            "Both. We start new platforms from scratch and also modernize, refactor and scale existing systems without forcing a full rewrite.",
        },
        {
          question: "Which technologies do you specialize in?",
          answer:
            "TypeScript, React, Node, Postgres and modern cloud infrastructure on Vercel and AWS, with a focus on long-lived, maintainable systems.",
        },
        {
          question: "How do we start working together?",
          answer:
            "Reach out through the contact form. We begin with a discovery conversation to understand your goals before scoping any engagement.",
        },
      ]),
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Capabilities />
      <Methodology />
      <Architecture />
      <Work />
      <FinalCTA />
    </>
  );
}
