import { createFileRoute } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";

export const Route = createFileRoute("/capabilities/product-engineering")({
  head: () => ({
    meta: [
      { title: "Product Engineering — FaruTech" },
      { name: "description", content: "From idea to platform in production. No shortcuts, no tech debt." },
      { property: "og:title", content: "Product Engineering — FaruTech" },
      { property: "og:description", content: "End-to-end product engineering for real operations." },
    ],
  }),
  component: () => (
    <CapabilityPage
      Icon={Boxes}
      eyebrow="Product Engineering"
      title="From idea"
      highlight="to production."
      intro="We design, build and operate web and mobile platforms that run real businesses. Critical paths, real users, real money."
      problems={[
        { title: "Stalled MVPs", desc: "Prototypes that can't take traffic and need a rewrite to launch." },
        { title: "Tool sprawl", desc: "Three disconnected tools doing what one platform should." },
        { title: "Manual ops", desc: "Spreadsheets and back-office hacks holding the business together." },
        { title: "Tech debt", desc: "Every release scarier than the last." },
      ]}
      solutions={[
        { title: "End-to-end product teams", desc: "Engineering, design and PM working as one — no relay races." },
        { title: "Production-grade from day one", desc: "CI/CD, observability, error budgets before the first user." },
        { title: "Operational tooling included", desc: "Admin, support, billing tools — not afterthoughts." },
        { title: "Documented architecture", desc: "ADRs, runbooks and diagrams that survive the handover." },
      ]}
      stack={["React", "TypeScript", "Node", "Postgres", "Redis", "tRPC", "Prisma", "Vercel", "AWS", "Terraform"]}
      useCases={[
        { title: "Operations platform", desc: "Unified dashboard replacing 6 internal tools across logistics, finance and support." },
        { title: "Marketplace MVP", desc: "Two-sided marketplace from zero to launch in 14 weeks, real payments on day one." },
        { title: "Field-ops mobile app", desc: "Offline-first React Native app for technicians with 99.9% sync reliability." },
      ]}
      cta="Let's build your platform."
    />
  ),
});
