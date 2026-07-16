import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { PageTransition, ScrollProgress, SolarSystemBackground } from "@/src/components/VisualEffects";
import { profile, siteContent } from "@/src/data/portfolio";
import { LivingCosmosSystems } from "@/src/components/LivingCosmos";

const bodyFont = Manrope({ subsets: ["latin", "vietnamese"], variable: "--font-body", display: "swap" });
const displayFont = Space_Grotesk({ subsets: ["latin", "vietnamese"], variable: "--font-display", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.example.com";
const isPublicSite = Boolean(process.env.NEXT_PUBLIC_SITE_URL);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} | Digital Portfolio`, template: `%s | ${profile.name}` },
  description: `Portfolio học tập môn ${siteContent.courseName}.`,
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: `${profile.name} | Digital Portfolio`, description: "Một hành trình học tập số có chủ đích.", url: siteUrl },
  twitter: { card: "summary_large_image", title: `${profile.name} | Digital Portfolio`, description: `Portfolio học tập môn ${siteContent.courseName}.` },
  robots: isPublicSite ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#080812",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteUrl,
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      ...(profile.email ? { email: profile.email } : {}),
      image: profile.avatar,
      affiliation: { "@type": "CollegeOrUniversity", name: profile.school },
      ...(profile.socialLinks.length ? { sameAs: profile.socialLinks.map((link) => link.href) } : {}),
    },
  };

  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <body suppressHydrationWarning className={`${bodyFont.variable} ${displayFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <a className="skip" href="#main">Bỏ qua nội dung</a>
        <SolarSystemBackground />
        <LivingCosmosSystems />
        <ScrollProgress />
        <Navbar />
        <main id="main"><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}
