"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Grid2X2, List, Search, SlidersHorizontal } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects } from "@/src/data/portfolio";
import { ProjectCard } from "@/src/components/ProjectCard";
import { Reveal } from "@/src/components/VisualEffects";

export function ProjectExplorer() {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("Tất cả");
  const [view, setView] = useState<"grid" | "timeline">("grid");
  const tags = ["Tất cả", ...Array.from(new Set(projects.flatMap((project) => project.tags)))];
  const filtered = useMemo(() => projects.filter((project) => {
    const haystack = [project.title, project.description, ...project.tags, ...project.tools].join(" ").toLowerCase();
    return (tag === "Tất cả" || project.tags.includes(tag)) && haystack.includes(query.trim().toLowerCase());
  }), [query, tag]);
  const resetFilters = () => { setQuery(""); setTag("Tất cả"); };

  return <>
    <Reveal delay={.1} className="mt-12">
      <div className="projects-control-rail">
        <div className="projects-control-heading">
          <div><p className="eyebrow">Bản đồ hồ sơ</p><h2>Chọn kỹ năng muốn khám phá</h2></div>
          <span>{projects.length} bài</span>
        </div>
        <div className="projects-control-primary">
          <label className="project-search glass">
            <Search size={18} className="muted" strokeWidth={1.5} />
            <span className="sr-only">Tìm kiếm bài tập</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm theo tên, công cụ hoặc kỹ năng" />
          </label>
          <div className="projects-view-switch" aria-label="Kiểu hiển thị">
            <button type="button" aria-label="Hiển thị dạng lưới" aria-pressed={view === "grid"} onClick={() => setView("grid")} className={view === "grid" ? "is-active" : ""}><Grid2X2 size={16} strokeWidth={1.5} /></button>
            <button type="button" aria-label="Hiển thị dạng timeline" aria-pressed={view === "timeline"} onClick={() => setView("timeline")} className={view === "timeline" ? "is-active" : ""}><List size={17} strokeWidth={1.5} /></button>
          </div>
        </div>
        <div className="projects-filter-row">
          <span className="projects-filter-label"><SlidersHorizontal size={16} strokeWidth={1.5} aria-hidden="true" /> Lọc theo kỹ năng</span>
          <div className="projects-filter-tags">
            {tags.map((item) => <button type="button" key={item} onClick={() => setTag(item)} aria-pressed={tag === item} className={tag === item ? "is-active" : ""}>{item}</button>)}
          </div>
        </div>
      </div>
    </Reveal>
    <div className="mt-8 flex items-center justify-between"><p className="muted text-sm" aria-live="polite"><span className="text-white">{filtered.length}</span> bài phù hợp</p>{query || tag !== "Tất cả" ? <button type="button" onClick={resetFilters} className="text-xs text-[var(--accent)] underline underline-offset-4">Xóa bộ lọc</button> : null}</div>
    <AnimatePresence mode="wait" initial={false}>{filtered.length ? view === "grid" ? <motion.div key="grid" className="project-mosaic mt-5" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }}><AnimatePresence mode="popLayout" initial={false}>{filtered.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</AnimatePresence></motion.div> : <motion.div key="timeline" className="timeline mt-8" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: .4, ease: [0.16, 1, .3, 1] }}>{filtered.map((project, index) => <motion.div layout key={project.id} className="timeline-item" initial={reduce ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .05, duration: .42, ease: [0.16, 1, .3, 1] }}><span className="timeline-dot" /><div className="card-shell"><div className="card-core grid gap-6 p-5 sm:grid-cols-[110px_1fr_auto] sm:items-center"><span className="display text-4xl font-semibold text-[var(--accent)]">{project.order}</span><div><p className="text-xs text-[var(--muted)]">{project.tags.join(" / ")}</p><h2 className="mt-2 text-xl font-semibold">{project.title}</h2><p className="muted mt-2 text-sm">{project.description}</p></div><Link className="btn text-xs" href={`/projects/${project.slug}`}>Chi tiết</Link></div></div></motion.div>)}</motion.div> : <motion.div key="empty" className="card-shell mt-6" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><div className="card-core p-12 text-center"><h2 className="text-2xl font-semibold">Không tìm thấy bài phù hợp</h2><p className="muted mx-auto mt-3 max-w-md text-sm leading-6">Thử một từ khóa ngắn hơn hoặc bỏ bộ lọc để xem lại toàn bộ danh sách.</p><button type="button" onClick={resetFilters} className="btn btn-primary mt-6">Hiển thị tất cả</button></div></motion.div>}</AnimatePresence>
  </>;
}
