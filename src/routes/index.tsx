import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { ProofBar } from "@/components/home/ProofBar";
import { Capabilities } from "@/components/home/Capabilities";
import { Methodology } from "@/components/home/Methodology";
import { Architecture } from "@/components/home/Architecture";
import { Work } from "@/components/home/Work";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FaruTech, Engineering the digital frontier" },
      {
        name: "description",
        content:
          "We build scalable platforms, multi-tenant SaaS and critical systems for teams that can't afford to rewrite. No shortcuts. No tech debt.",
      },
      { property: "og:title", content: "FaruTech, Engineering the digital frontier" },
      {
        property: "og:description",
        content:
          "Engineering studio for scalable platforms and multi-tenant SaaS. Architecture, product engineering, automation.",
      },
      { property: "og:type", content: "website" },
    ],
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
