import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

interface LegalSection {
  title: string;
  content: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  lastUpdatedLabel: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalPageLayout({
  title,
  lastUpdated,
  lastUpdatedLabel,
  intro,
  sections,
}: LegalPageLayoutProps) {
  return (
    <section className="pt-32 md:pt-44 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back home</span>
        </Link>

        <h1 className="mt-8 font-display text-4xl md:text-5xl font-semibold tracking-tight">
          {title}
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          {lastUpdatedLabel}: {lastUpdated}
        </p>

        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Questions? Contact us at{" "}
            <a
              href="mailto:hello@farutech.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              hello@farutech.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
