import type { MetadataRoute } from "next";

/**
 * Keep the canonical origin in one environment variable when deploying.
 * The fallback is intentionally a non-production placeholder so a preview
 * build never advertises the local development host to crawlers.
 */
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  if (!publicSiteUrl) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${publicSiteUrl}/sitemap.xml`,
    host: publicSiteUrl,
  };
}
