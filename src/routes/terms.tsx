import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { useT } from "@/i18n/useT";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — FaruTech" },
      { name: "description", content: "The ground rules for using the FaruTech website." },
      { property: "og:title", content: "Terms of Service — FaruTech" },
      { property: "og:description", content: "Acceptable use, content ownership, engagement terms." },
    ],
  }),
  component: () => {
    const t = useT();
    return <LegalLayout content={t.legal.terms} />;
  },
});
