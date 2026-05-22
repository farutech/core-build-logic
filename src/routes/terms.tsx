import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { useLocale } from "@/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — FaruTech" },
      { name: "description", content: "FaruTech Terms of Service. Read our terms and conditions for using our website and services." },
      { property: "og:title", content: "Terms of Service — FaruTech" },
      { property: "og:description", content: "FaruTech Terms of Service. Read our terms and conditions for using our website and services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const { t } = useLocale();

  return (
    <LegalPageLayout
      title={t.terms.title}
      lastUpdatedLabel={t.terms.lastUpdated}
      lastUpdated="January 2025"
      intro={t.terms.intro}
      sections={t.terms.sections}
    />
  );
}
