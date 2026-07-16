"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/src/data/portfolio";
import { getPlanetForProject } from "@/src/data/planets";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const reduce = useReducedMotion();
  const planet = getPlanetForProject(project.id);

  return <motion.article
    layout="position"
    layoutId={`project-${project.id}`}
    className={`card-shell ${planet.className}`}
    initial={reduce ? false : { opacity: 0, y: 22, scale: .985 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: .12, margin: "0px 0px -8% 0px" }}
    exit={reduce ? undefined : { opacity: 0, y: 12, scale: .98 }}
    transition={{ duration: .62, delay: reduce ? 0 : index * .045, ease: [0.16, 1, .3, 1], layout: { type: "spring", stiffness: 280, damping: 32 } }}
  >
    <div
      className="card-core project-card"
      onPointerMove={(event) => {
        if (event.pointerType === "touch" || reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        event.currentTarget.style.setProperty("--spot-x", `${x}px`);
        event.currentTarget.style.setProperty("--spot-y", `${y}px`);
        event.currentTarget.style.setProperty("--tilt-x", `${((y / rect.height) - .5) * -7}deg`);
        event.currentTarget.style.setProperty("--tilt-y", `${((x / rect.width) - .5) * 7}deg`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--tilt-x", "0deg");
        event.currentTarget.style.setProperty("--tilt-y", "0deg");
      }}
    >
      <Link href={`/projects/${project.slug}`} className="block p-2" aria-label={`Xem chi tiết ${project.title}`}>
        <div className="project-media aspect-[2/1]"><Image src={project.thumbnail} alt={`Minh họa ${project.shortTitle} theo chủ đề ${planet.label}`} fill sizes="(max-width: 767px) 100vw, (max-width: 1099px) 50vw, 58vw" className="object-cover" /></div>
      </Link>
      <div className="project-card-content flex min-h-[225px] flex-col p-5 pt-3">
        <div className="flex items-center justify-between gap-3"><span className="font-mono text-xs font-semibold tracking-[.16em] text-[var(--accent)]">{project.order}</span><span className="project-status">{project.status}</span></div>
        <div suppressHydrationWarning className="project-card-copy mt-4"><div className="project-card-tags mb-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted)]">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><h3 className="text-lg font-semibold leading-snug tracking-[-.03em]">{project.title}</h3><p className="muted mt-2 text-sm leading-6">{project.description}</p></div>
        <div className={`planet-chip ${planet.className}`}><span className="planet-chip-orb" /> {planet.label} <span className="planet-chip-note">{planet.note}</span></div>
        <div className="project-card-footer mt-auto pt-5"><div className="project-card-tools mb-4 flex flex-wrap gap-2 text-[11px] text-[var(--muted-strong)]">{project.tools.slice(0, 3).map((tool) => <span key={tool} className="rounded-md border border-white/10 px-2 py-1">{tool}</span>)}</div><div className="flex flex-wrap items-center justify-between gap-3"><Link href={`/projects/${project.slug}`} className="btn btn-primary text-xs">Xem hồ sơ <span className="btn-icon"><ArrowUpRight size={15} strokeWidth={1.5} /></span></Link><span className="project-document-meta"><FileText size={14} strokeWidth={1.5} /> {project.document.pages} trang</span></div></div>
      </div>
    </div>
  </motion.article>;
}
