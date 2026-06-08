import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { useT } from "@/i18n/useT";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security · FaruTech" },
      { name: "description", content: "How FaruTech builds, hosts and protects the systems we ship." },
      { property: "og:title", content: "Security · FaruTech" },
      { property: "og:description", content: "Engineering practices, infrastructure, incident response, disclosure." },
    ],
  }),
  component: () => {
    const t = useT();
    return <LegalLayout content={t.legal.security} />;
  },
});
