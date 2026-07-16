"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Pause, Play, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { profile } from "@/src/data/portfolio";

const links = [
  { label: "Giới thiệu", href: "/", planet: "sun" },
  { label: "Dự án", href: "/projects", planet: "earth" },
  { label: "Tổng kết", href: "/reflection", planet: "saturn" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 18));

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMotionPaused(window.localStorage.getItem("solar-motion-paused") === "true");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleMotion = () => {
    const next = !motionPaused;
    setMotionPaused(next);
    window.localStorage.setItem("solar-motion-paused", String(next));
    window.dispatchEvent(new CustomEvent("solar-motion-change", { detail: next }));
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (!open) return;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => focusableElements(menuRef.current)[0]?.focus());
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const elements = focusableElements(menuRef.current);
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const initials = profile.name
    .split(/\s+/)
    .filter(Boolean)
    .filter((_, index, parts) => index === 0 || index === parts.length - 1)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return <>
    <header className={`nav-shell card-shell ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner card-core">
        <Link className="nav-logo" href="/" aria-label={`${profile.name}, trang chủ`}><span className="nav-logo-mark">{initials}</span><span className="nav-logo-name">{profile.name}</span></Link>
        <nav className="nav-links" aria-label="Điều hướng chính">{links.map((link) => <Link key={link.href} className={`nav-link nav-link-${link.planet}`} href={link.href} aria-current={isActive(link.href) ? "page" : undefined}><span className={`nav-planet nav-planet-${link.planet}`} aria-hidden="true"><i /></span><span>{link.label}</span></Link>)}</nav>
        <button type="button" className="motion-toggle" onClick={toggleMotion} aria-label={motionPaused ? "Tiếp tục chuyển động hệ mặt trời" : "Tạm dừng chuyển động hệ mặt trời"} aria-pressed={motionPaused}>{motionPaused ? <Play size={16} strokeWidth={1.5} /> : <Pause size={16} strokeWidth={1.5} />}</button>
        <button ref={menuButtonRef} className="menu-button" type="button" aria-label={open ? "Đóng menu" : "Mở menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}</button>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div ref={menuRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Menu điều hướng" className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35, ease: [0.16, 1, .3, 1] }}><nav className="container" aria-label="Điều hướng di động">{links.map((link, index) => <motion.div key={link.href} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .07, duration: .5, ease: [0.16, 1, .3, 1] }}><Link className={`mobile-nav-link mobile-nav-link-${link.planet}`} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} onClick={() => setOpen(false)}><span className={`nav-planet nav-planet-${link.planet}`} aria-hidden="true"><i /></span><span>{link.label}</span></Link></motion.div>)}</nav></motion.div>}</AnimatePresence>
  </>;
}

function focusableElements(root: HTMLElement | null): HTMLElement[] {
  if (!root) return [];
  return Array.from(root.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"));
}
