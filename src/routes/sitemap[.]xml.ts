import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.farutech.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/capabilities", changefreq: "weekly", priority: "0.9" },
  { path: "/capabilities/product-engineering", changefreq: "monthly", priority: "0.8" },
  { path: "/capabilities/saas-platforms", changefreq: "monthly", priority: "0.8" },
  { path: "/capabilities/architecture-consulting", changefreq: "monthly", priority: "0.8" },
  { path: "/capabilities/ux-engineering", changefreq: "monthly", priority: "0.8" },
  { path: "/capabilities/automation-integrations", changefreq: "monthly", priority: "0.8" },
  { path: "/work", changefreq: "monthly", priority: "0.7" },
  { path: "/methodology", changefreq: "monthly", priority: "0.6" },
  { path: "/stack", changefreq: "monthly", priority: "0.6" },
  { path: "/studio", changefreq: "monthly", priority: "0.6" },
  { path: "/careers", changefreq: "monthly", priority: "0.5" },
  { path: "/security", changefreq: "yearly", priority: "0.4" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
