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
      slug="product-engineering"
      Icon={Boxes}
      stack={["React", "TypeScript", "Node", "Postgres", "Redis", "tRPC", "Prisma", "Vercel", "AWS", "Terraform"]}
    />
  ),
});
