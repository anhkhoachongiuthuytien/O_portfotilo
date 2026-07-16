"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const AMBIENTS = [
  { selector: ".theme-hero", rgb: "255 190 92", name: "solar" },
  { selector: ".theme-earth", rgb: "77 220 174", name: "earth" },
  { selector: ".theme-cyan", rgb: "91 203 245", name: "cyan" },
  { selector: ".theme-mars", rgb: "239 108 80", name: "mars" },
  { selector: ".theme-sun", rgb: "255 199 93", name: "sun" },
  { selector: ".theme-saturn", rgb: "242 200 121", name: "saturn" },
  { selector: ".project-detail-shell.planet-mercury", rgb: "183 176 170", name: "mercury" },
  { selector: ".project-detail-shell.planet-venus", rgb: "232 173 107", name: "venus" },
  { selector: ".project-detail-shell.planet-mars", rgb: "227 109 86", name: "mars" },
  { selector: ".project-detail-shell.planet-jupiter", rgb: "219 154 98", name: "jupiter" },
  { selector: ".project-detail-shell.planet-uranus", rgb: "142 219 228", name: "uranus" },
  { selector: ".project-detail-shell.planet-neptune", rgb: "108 143 232", name: "neptune" },
  { selector: ".theme-planet", rgb: "221 154 99", name: "planet" },
];

export function LivingCosmosSystems() {
  return (
    <>
      <AmbientLightController />
      <OrbitalReadingProgress />
    </>
  );
}

function AmbientLightController() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = AMBIENTS.flatMap((ambient) =>
      Array.from(document.querySelectorAll<HTMLElement>(ambient.selector)).map((element) => ({ element, ambient })),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!active) return;
        const match = sections.find(({ element }) => element === active.target);
        if (!match) return;
        document.documentElement.style.setProperty("--ambient-rgb", match.ambient.rgb);
        document.documentElement.dataset.ambient = match.ambient.name;
      },
      { rootMargin: "-28% 0px -42%", threshold: [0.05, 0.25, 0.5, 0.75] },
    );

    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function OrbitalReadingProgress() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const ringRef = useRef<SVGCircleElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isDetail = pathname.split("/").filter(Boolean).length === 2 && pathname.startsWith("/projects/");

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    ringRef.current?.style.setProperty("--orbit-progress", String(value));
    progressRef.current?.setAttribute("aria-valuenow", String(Math.round(value * 100)));
  });

  if (!isDetail) return null;
  return (
    <div ref={progressRef} className="reading-orbit" aria-label="Tiến trình đọc trang" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle className="reading-orbit-track" cx="24" cy="24" r="19" />
        <circle ref={ringRef} className="reading-orbit-value" cx="24" cy="24" r="19" />
      </svg>
      <span className="reading-orbit-planet" aria-hidden="true" />
    </div>
  );
}
