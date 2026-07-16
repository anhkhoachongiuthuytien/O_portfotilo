"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type Skill = { name: string; detail: string };

const CONNECTIONS = [
  { d: "M 22 28 C 34 16, 56 16, 72 31", target: 1 },
  { d: "M 22 28 C 20 51, 34 71, 48 77", target: 2 },
  { d: "M 72 31 C 78 51, 68 68, 48 77", target: 3 },
  { d: "M 48 77 C 62 82, 79 71, 84 57", target: 3 },
];

const SKILL_META = [
  { label: "Dấu vết nguồn", signal: "Đã kiểm chứng" },
  { label: "Vòng lặp con người", signal: "Có phản biện" },
  { label: "Luồng chia sẻ", signal: "Đang đồng bộ" },
  { label: "Góc nhìn đạo đức", signal: "Có kiểm soát" },
];

export function ConstellationSkills({ skills }: { skills: Skill[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.28 });
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <div ref={wrapperRef} className="constellation-map" onPointerLeave={() => setActive(null)}>
      <div className="constellation-core" aria-hidden="true">
        <span className="constellation-core-ring constellation-core-ring-a" />
        <span className="constellation-core-ring constellation-core-ring-b" />
        <span className="constellation-core-orb" />
        <span className="constellation-core-label">KỸ NĂNG<br /><b>SỐ</b></span>
      </div>
      <svg className="constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {CONNECTIONS.map((connection, index) => (
          <motion.path
            d={connection.d}
            key={connection.d}
            className={active === null || active === index || active === connection.target ? "is-related" : ""}
            initial={{ pathLength: reduceMotion ? 1 : 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: active === null ? 0.42 : 0.85 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 1.35, delay: index * 0.16, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </svg>
      {skills.map((skill, index) => (
        <motion.article
          key={skill.name}
          className={`constellation-node constellation-node-${index + 1} ${active !== null && active !== index ? "is-muted" : ""}`}
          tabIndex={0}
          onFocus={() => setActive(index)}
          onBlur={() => setActive(null)}
          onPointerEnter={() => setActive(index)}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="constellation-node-head">
            <span className="constellation-number">0{index + 1}</span>
            <span className="constellation-status"><i aria-hidden="true" />{SKILL_META[index].signal}</span>
          </div>
          <div className={`constellation-glyph constellation-glyph-${index + 1}`} aria-hidden="true">
            <span className="glyph-orbit glyph-orbit-a" />
            <span className="glyph-orbit glyph-orbit-b" />
            <span className="glyph-core" />
            <span className="glyph-satellite" />
          </div>
          <div className="constellation-node-copy">
            <span className="constellation-kicker">{SKILL_META[index].label}</span>
            <h3>{skill.name}</h3>
            <p>{skill.detail}</p>
          </div>
          <span className="constellation-scan" aria-hidden="true" />
        </motion.article>
      ))}
    </div>
  );
}

export function LivingEarth() {
  return (
    <div className="living-earth" aria-hidden="true">
      <span className="living-earth-surface" />
      <span className="living-earth-clouds" />
      <span className="living-earth-orbit" />
      <span className="living-earth-satellite" />
    </div>
  );
}

export function SolarFlareButton() {
  const [flashing, setFlashing] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
  }, []);

  const ignite = () => {
    setFlashing(false);
    window.requestAnimationFrame(() => setFlashing(true));
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setFlashing(false), 680);
  };

  return (
    <>
      <button type="button" className="solar-trigger" onClick={ignite} aria-label="Chạm vào Mặt Trời">
        <Sparkles size={15} strokeWidth={1.5} />
        <span>Chạm Mặt Trời</span>
      </button>
      <span className={`solar-flash ${flashing ? "is-active" : ""}`} aria-hidden="true" />
    </>
  );
}

export function MagneticLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <Link
      ref={linkRef}
      href={href}
      className={`btn magnetic-link ${className}`}
      onPointerMove={(event) => {
        if (event.pointerType === "touch" || reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
        event.currentTarget.style.setProperty("--magnetic-x", `${x}px`);
        event.currentTarget.style.setProperty("--magnetic-y", `${y}px`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--magnetic-x", "0px");
        event.currentTarget.style.setProperty("--magnetic-y", "0px");
      }}
    >
      {children}
      <span className="btn-icon"><ArrowRight size={15} strokeWidth={1.5} /></span>
    </Link>
  );
}

export function SaturnMilestone({ index }: { index: number }) {
  return <span className="saturn-milestone" style={{ "--saturn-turn": `${index * 22}deg` } as React.CSSProperties} aria-hidden="true"><i /></span>;
}
