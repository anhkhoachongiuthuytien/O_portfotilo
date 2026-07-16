import { ArrowUpRight, ArrowUp } from "lucide-react";
import { profile, siteContent } from "@/src/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="display text-xl font-semibold">{profile.name}</p>
          <p className="muted mt-2 max-w-md text-sm leading-6">Portfolio học tập cho môn {siteContent.courseName}.</p>
          <p className="muted mt-5 text-xs">© {new Date().getFullYear()} {profile.name}. Nội dung được quản lý trong một file dữ liệu.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--muted)]">
          {profile.email ? <a href={`mailto:${profile.email}`} className="transition hover:text-white">Email</a> : null}
          {profile.socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">{social.label} <ArrowUpRight className="inline" size={14} strokeWidth={1.5} /></a>)}
          <a href="#main" className="inline-flex items-center gap-2 transition hover:text-white"><ArrowUp size={15} strokeWidth={1.5} /> Đầu trang</a>
        </div>
      </div>
    </footer>
  );
}
