import type { Metadata } from "next";
import { profile } from "@/src/data/portfolio";

const description = "Sáu bài tập về kỹ năng số, nghiên cứu, cộng tác và ứng dụng AI có trách nhiệm.";

export const metadata: Metadata = {
  title: "Dự án",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: `Dự án | ${profile.name}`, description, url: "/projects", type: "website" },
  twitter: { card: "summary_large_image", title: `Dự án | ${profile.name}`, description },
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
