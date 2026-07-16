import type { Metadata } from "next";
import { profile } from "@/src/data/portfolio";

const description = "Những kiến thức, khó khăn và định hướng sau hành trình học công nghệ số và AI.";

export const metadata: Metadata = {
  title: "Tổng kết",
  description,
  alternates: { canonical: "/reflection" },
  openGraph: { title: `Tổng kết | ${profile.name}`, description, url: "/reflection", type: "website" },
  twitter: { card: "summary_large_image", title: `Tổng kết | ${profile.name}`, description },
};

export default function ReflectionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
