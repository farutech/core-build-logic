import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { useLocale } from "@/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FaruTech" },
      { name: "description", content: "FaruTech Privacy Policy. Learn how we collect, use, and protect your personal data." },
      { property: "og:title", content: "Privacy Policy — FaruTech" },
      { property: "og:description", content: "FaruTech Privacy Policy. Learn how we collect, use, and protect your personal data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t } = useLocale();

  return (
    <LegalPageLayout
      title={t.privacy.title}
      lastUpdatedLabel={t.privacy.lastUpdated}
      lastUpdated="January 2025"
      intro={t.privacy.intro}
      sections={t.privacy.sections}
    />
  );
}
