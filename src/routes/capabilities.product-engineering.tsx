import { createFileRoute } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { CapabilityPage } from "@/components/capabilities/CapabilityPage";
import { useLocale } from "@/i18n";

export const Route = createFileRoute("/capabilities/product-engineering")({
  head: () => ({
    meta: [
      { title: "Product Engineering — FaruTech" },
      { name: "description", content: "From idea to platform in production. No shortcuts, no tech debt." },
      { property: "og:title", content: "Product Engineering — FaruTech" },
      { property: "og:description", content: "End-to-end product engineering for real operations." },
    ],
  }),
  component: ProductEngineeringPage,
});

function ProductEngineeringPage() {
  const { t } = useLocale();
  const data = t.productEngineering;

  return (
    <CapabilityPage
      Icon={Boxes}
      eyebrow={data.eyebrow}
      title={data.title}
      highlight={data.highlight}
      intro={data.intro}
      problems={data.problems}
      solutions={data.solutions}
      stack={data.stack}
      useCases={data.useCases}
      cta={data.cta}
    />
  );
}
