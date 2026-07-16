"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const items = [
  { id: "objective", label: "Mục tiêu" },
  { id: "context", label: "Bối cảnh" },
  { id: "process", label: "Quá trình" },
  { id: "tools", label: "Công cụ" },
  { id: "result", label: "Kết quả & minh chứng" },
  { id: "lessons", label: "Bài học" },
  { id: "document", label: "Bài nộp đầy đủ" },
];

export function ProjectTableOfContents() {
  const [active, setActive] = useState(items[0].id);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-20% 0px -65%", threshold: 0 });
    items.forEach((item) => { const element = document.getElementById(item.id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return <><div className="hidden lg:block"><div className="detail-toc glass sticky top-28 rounded-2xl p-5"><div className="detail-toc-heading"><span>Đọc theo quỹ đạo</span><b>07 mục</b></div><nav className="mt-4 space-y-1" aria-label="Mục lục bài tập">{items.map((item, index) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} className={`detail-toc-link ${active === item.id ? "is-active" : ""}`}><span>0{index + 1}</span>{item.label}</a>)}</nav></div></div><label className="detail-toc-mobile mt-8 block lg:hidden"><span className="sr-only">Chọn phần trong bài</span><select className="glass w-full rounded-xl px-4 py-3 text-sm text-white" value={active} onChange={(event) => { setActive(event.target.value); document.getElementById(event.target.value)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); }}>{items.map((item, index) => <option key={item.id} value={item.id}>0{index + 1} - {item.label}</option>)}</select></label></>;
}
