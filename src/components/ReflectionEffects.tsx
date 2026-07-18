"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useSyncExternalStore } from "react";

const subscribeToMotionPreference = (callback: () => void) => {
  window.addEventListener("solar-motion-change", callback);
  return () => window.removeEventListener("solar-motion-change", callback);
};

const getMotionPreference = () => window.localStorage.getItem("solar-motion-paused") === "true";
const getServerMotionPreference = () => false;

export function ReflectionEffects() {
  const reduce = useReducedMotion() ?? false;
  const paused = useSyncExternalStore(subscribeToMotionPreference, getMotionPreference, getServerMotionPreference);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 88, damping: 24, mass: 0.22 });
  const orbitRotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  const sweepY = useTransform(smoothProgress, [0, 1], ["-24vh", "84vh"]);
  const motionDisabled = reduce || paused;

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-reflection-reveal]"));
    if (motionDisabled) {
      sections.forEach((section) => section.classList.add("is-reflection-active"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-reflection-active");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -16%", threshold: 0.18 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [motionDisabled]);

  return (
    <div className={`reflection-motion-layer${motionDisabled ? " is-static" : ""}`} aria-hidden="true">
      <motion.div
        className="reflection-light-sweep"
        style={motionDisabled ? undefined : { y: sweepY }}
      />
      <div className="reflection-reading-orbit">
        <svg viewBox="0 0 64 64">
          <circle className="reflection-reading-track" cx="32" cy="32" r="25" />
          <motion.circle
            className="reflection-reading-value"
            cx="32"
            cy="32"
            r="25"
            style={{ pathLength: smoothProgress }}
          />
        </svg>
        <motion.span style={motionDisabled ? undefined : { rotate: orbitRotation }}><i /></motion.span>
      </div>
    </div>
  );
}
