import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { useLocale } from "@/i18n";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — FaruTech" },
      { name: "description", content: "FaruTech Security practices. Learn how we protect your data and systems." },
      { property: "og:title", content: "Security — FaruTech" },
      { property: "og:description", content: "FaruTech Security practices. Learn how we protect your data and systems." },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  const { t } = useLocale();

  return (
    <LegalPageLayout
      title={t.security.title}
      lastUpdatedLabel={t.security.lastUpdated}
      lastUpdated="January 2025"
      intro={t.security.intro}
      sections={t.security.sections}
    />
  );
}
