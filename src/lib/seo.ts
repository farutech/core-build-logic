/**
 * Centralized technical SEO helper for TanStack Start.
 *
 * Produces the `meta`, `links` and `scripts` arrays consumed by a route's
 * `head()` option. Keeps canonical URLs, Open Graph, Twitter cards, hreflang
 * alternates and JSON-LD structured data consistent across every page.
 *
 * Content (titles/descriptions) is owned by each route — this file only wires
 * the technical plumbing so it can be audited in one place.
 */

export const SITE_URL = "https://www.farutech.com";
export const SITE_NAME = "FaruTech";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.png`;

/** Languages we actively serve and want indexed (must match i18n SUPPORTED_LANGS). */
export const INDEXABLE_LANGS = ["en", "es"] as const;

type MetaTag =
  | { title: string }
  | { charSet: string }
  | { name: string; content: string }
  | { property: string; content: string };

type LinkTag = { rel: string; href: string; hrefLang?: string } & Record<string, string>;

type ScriptTag = { type: string; children: string };

export interface SeoInput {
  /** Absolute path beginning with "/", e.g. "/capabilities/saas-platforms". */
  path: string;
  title: string;
  description: string;
  /** Absolute or site-relative image URL. Defaults to the brand OG image. */
  image?: string;
  /** og:type — "website" for landing pages, "article" for content. */
  type?: "website" | "article" | "profile";
  /** Set false for thin/duplicate pages you don't want indexed. */
  index?: boolean;
  /** Extra JSON-LD objects to embed (Service, FAQPage, etc.). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function absUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

/**
 * hreflang alternates. We serve a single URL per page that adapts to the
 * visitor's browser language (en + es today), so each language points at the
 * same canonical URL. x-default points at the canonical too.
 */
function alternateLinks(canonical: string): LinkTag[] {
  const links: LinkTag[] = INDEXABLE_LANGS.map((lang) => ({
    rel: "alternate",
    hrefLang: lang,
    href: canonical,
  }));
  links.push({ rel: "alternate", hrefLang: "x-default", href: canonical });
  return links;
}

export interface SeoResult {
  meta: MetaTag[];
  links: LinkTag[];
  scripts: ScriptTag[];
}

export function buildSeo(input: SeoInput): SeoResult {
  const {
    path,
    title,
    description,
    image = DEFAULT_OG_IMAGE,
    type = "website",
    index = true,
    jsonLd,
  } = input;

  const canonical = absUrl(path);
  const ogImage = absUrl(image);

  const meta: MetaTag[] = [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content: index
        ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        : "noindex, follow",
    },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: canonical },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: ogImage },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "es_ES" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  const links: LinkTag[] = [
    { rel: "canonical", href: canonical },
    ...alternateLinks(canonical),
  ];

  const scripts: ScriptTag[] = [];
  if (jsonLd) {
    const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    for (const block of blocks) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(block),
      });
    }
  }

  return { meta, links, scripts };
}

/* ------------------------------------------------------------------ */
/* Reusable JSON-LD builders                                           */
/* ------------------------------------------------------------------ */

/** Organization — emitted once on the homepage / root. */
export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: "FaruTech",
    url: SITE_URL,
    logo: `${SITE_URL}/og/logo.png`,
    description:
      "Engineering studio building scalable platforms, multi-tenant SaaS and critical systems.",
    sameAs: ["https://www.linkedin.com/company/farutech"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@farutech.com",
      availableLanguage: ["en", "es"],
    },
  };
}

/** WebSite node — enables sitelinks search box eligibility. */
export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: ["en", "es"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

/** BreadcrumbList for inner pages. */
export function breadcrumbJsonLd(crumbs: Crumb[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

/** Service node for a capability page. */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    serviceType: opts.name,
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQPage node — rich results eligibility for Q&A content. */
export function faqJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}
