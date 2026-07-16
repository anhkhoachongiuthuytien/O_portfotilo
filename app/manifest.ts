import type { MetadataRoute } from "next";
import { profile, siteContent } from "@/src/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return { name: `${profile.name} | Digital Portfolio ${siteContent.portfolioYear}`, short_name: "Portfolio", description: `Portfolio môn ${siteContent.courseName}.`, start_url: "/", display: "standalone", background_color: "#080812", theme_color: "#080812", lang: "vi", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }] };
}
