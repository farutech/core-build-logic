import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { useT } from "@/i18n/useT";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · FaruTech" },
      { name: "description", content: "How FaruTech collects, uses and protects your data." },
      { property: "og:title", content: "Privacy Policy · FaruTech" },
      { property: "og:description", content: "Your data, our responsibility." },
    ],
  }),
  component: () => {
    const t = useT();
    return <LegalLayout content={t.legal.privacy} />;
  },
});
