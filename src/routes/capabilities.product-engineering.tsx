import { createFileRoute } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { buildSeo, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/capabilities/product-engineering")({
  head: () =>
    buildSeo({
      path: "/capabilities/product-engineering",
      title: "Product Engineering · FaruTech",
      description:
        "End-to-end product engineering: from idea to platform in production. No shortcuts, no tech debt.",
      jsonLd: [
        serviceJsonLd({
          name: "Product Engineering",
          description:
            "End-to-end product engineering for real operations, from idea to production platform.",
          path: "/capabilities/product-engineering",
        }),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Capabilities", path: "/capabilities" },
          { name: "Product Engineering", path: "/capabilities/product-engineering" },
        ]),
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
