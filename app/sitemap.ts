import type { MetadataRoute } from "next";
import { projects } from "@/src/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

/** The portfolio is a small, mostly-static site, so a generated sitemap is
 * enough and avoids keeping route URLs in sync by hand. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/reflection`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  return [
    ...staticRoutes,
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
