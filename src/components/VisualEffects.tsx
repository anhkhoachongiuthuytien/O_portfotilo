"use client";

import { AnimatePresence, motion, useInView, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const isDetail = pathname.split("/").filter(Boolean).length === 2 && pathname.startsWith("/projects/");
  if (isDetail) return null;
  return <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX, transformOrigin: "0% 50%" }} />;
}

export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  return <><AnimatePresence mode="wait" initial={false}><motion.div key={pathname} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: .42, ease: [0.16, 1, .3, 1] }}>{children}</motion.div></AnimatePresence><RouteTravel pathname={pathname} reduced={reduce ?? false} /></>;
}

type SceneTheme = "solar" | "mercury" | "venus" | "earth" | "mars" | "jupiter" | "saturn" | "uranus" | "neptune";
const DETAIL_ROUTE_THEMES: Record<string, Exclude<SceneTheme, "solar" | "earth" | "saturn">> = {
  "quan-ly-tep-tin": "mercury",
  "thong-tin-hoc-thuat": "venus",
  "prompt-hoc-tap": "mars",
  "hop-tac-truc-tuyen": "jupiter",
  "ai-tao-sinh": "uranus",
  "ai-co-trach-nhiem": "neptune",
};

const routeTheme = (path: string): SceneTheme => {
  if (path.startsWith("/reflection")) return "saturn";
  if (path.startsWith("/projects/")) {
    const slug = path.split("/").filter(Boolean)[1] ?? "";
    return DETAIL_ROUTE_THEMES[slug] ?? "earth";
  }
  if (path.startsWith("/projects")) return "earth";
  return "solar";
};

function RouteTravel({ pathname, reduced }: { pathname: string; reduced: boolean }) {
  const previousPath = useRef(pathname);
  const pendingPath = useRef<string | null>(null);
  const navigationTimer = useRef<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (previousPath.current === pathname) return;
    const previousTheme = routeTheme(previousPath.current);
    previousPath.current = pathname;
    if (pendingPath.current === pathname) {
      pendingPath.current = null;
      return;
    }
    const nextTheme = routeTheme(pathname);
    if (nextTheme === previousTheme) return;
    window.dispatchEvent(new CustomEvent("cosmic-route-focus", { detail: { theme: nextTheme, reduced } }));
  }, [pathname, reduced]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname && url.search === window.location.search) return;
      const nextTheme = routeTheme(url.pathname);
      if (nextTheme === routeTheme(pathname)) return;
      event.preventDefault();
      pendingPath.current = url.pathname;
      window.dispatchEvent(new CustomEvent("cosmic-route-focus", { detail: { theme: nextTheme, reduced } }));
      if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
      navigationTimer.current = window.setTimeout(() => router.push(`${url.pathname}${url.search}${url.hash}`), reduced ? 0 : 700);
    };
    document.addEventListener("click", onDocumentClick, true);
    return () => {
      document.removeEventListener("click", onDocumentClick, true);
      if (navigationTimer.current) window.clearTimeout(navigationTimer.current);
    };
  }, [pathname, reduced, router]);

  return null;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion() ?? false;
  const revealRef = useRef<HTMLDivElement>(null);
  const inView = useInView(revealRef, { once: true, amount: 0.16, margin: "0px 0px -8% 0px" });
  return <motion.div ref={revealRef} className={className} initial={{ opacity: 0, y: reduce ? 0 : 24 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduce ? 0 : 24 }} transition={{ duration: reduce ? .16 : .72, delay: reduce ? 0 : delay, ease: [0.16, 1, .3, 1] }}>{children}</motion.div>;
}

type Planet = {
  orbit: number;
  speed: number;
  radius: number;
  inner: string;
  outer: string;
  phase: number;
  texture: string;
  textureScale?: number;
  textureCrop?: { sx: number; sy: number; sw: number; sh: number };
  axialTilt?: number;
  ring?: boolean;
};

const PLANETS: Planet[] = [
  { orbit: .17, speed: .00055, radius: .016, inner: "#e4e0d9", outer: "#726c68", phase: .8, texture: "/planets/mercury.webp" },
  { orbit: .2, speed: .00034, radius: .022, inner: "#ffe0a4", outer: "#b8733e", phase: 2.2, texture: "/planets/venus.webp" },
  { orbit: .3, speed: .00025, radius: .027, inner: "#8ee5ff", outer: "#1f5c93", phase: 4.1, texture: "/planets/earth.webp" },
  { orbit: .39, speed: .0002, radius: .021, inner: "#ffab76", outer: "#963f35", phase: 5.8, texture: "/planets/mars.webp" },
  { orbit: .51, speed: .00013, radius: .052, inner: "#f4d19c", outer: "#9d5938", phase: 1.4, texture: "/planets/jupiter.webp" },
  { orbit: .64, speed: .0001, radius: .044, inner: "#fff0bb", outer: "#b98b49", phase: 3.2, texture: "/planets/saturn.webp", textureScale: 2.06, textureCrop: { sx: 151, sy: 143, sw: 338, sh: 338 }, axialTilt: -.08, ring: true },
  { orbit: .77, speed: .000075, radius: .032, inner: "#b6f2ff", outer: "#3d8ea5", phase: 5.1, texture: "/planets/uranus.webp", textureScale: 2.8, axialTilt: -.08, ring: true },
  { orbit: .89, speed: .000058, radius: .032, inner: "#90c8ff", outer: "#2d4f9f", phase: .4, texture: "/planets/neptune.webp" },
];
const MOON: Planet = { orbit: 0, speed: 0, radius: .04, inner: "#e4e0d9", outer: "#726c68", phase: 0, texture: "/planets/mercury.webp", textureScale: 2.5 };
type RouteTransition = {
  active: boolean;
  started: number;
  fromTheme: SceneTheme;
  theme: SceneTheme;
};

export function SolarSystemBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const galaxyRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scrollProgress = useRef(0);
  const scrollVelocityTarget = useRef(0);
  const sceneTheme = useRef<SceneTheme>(routeTheme(pathname));
  const [paused, setPaused] = useState(() => typeof window !== "undefined" && window.localStorage.getItem("solar-motion-paused") === "true");

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    scrollProgress.current = value;
    scrollVelocityTarget.current = Math.min(1, Math.abs(scrollYProgress.getVelocity()) / 0.45);
  });

  useEffect(() => {
    const onMotionChange = (event: Event) => setPaused((event as CustomEvent<boolean>).detail);
    window.addEventListener("solar-motion-change", onMotionChange);
    return () => window.removeEventListener("solar-motion-change", onMotionChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    type Star = { x: number; y: number; radius: number; depth: number; phase: number; color: string };
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars: Star[] = [];
    let frame = 0;
    let orbitalClock = 0;
    let lastOrbitalTime = 0;
    let routeTimer = 0;
    const lastPositions = new Map<string, { x: number; y: number; radius: number }>();
    let routeTransition: RouteTransition = { active: false, started: 0, fromTheme: sceneTheme.current, theme: sceneTheme.current };
    let active = !reduce && !paused && !document.hidden;
    let lastFrame = 0;
    let frameInterval = 1000 / 60;
    const pointer = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const supportsPointer = window.matchMedia("(pointer: fine)").matches;
    const starColors = ["#f4f0ff", "#b8d7ff", "#ffe4ad", "#d8c6ff"];
    const textures = new Map<string, HTMLImageElement>();
    const textureSources = ["/planets/sun.webp", ...PLANETS.map((planet) => planet.texture)];

    textureSources.forEach((source) => {
      const image = new window.Image();
      image.decoding = "async";
      image.src = source;
      textures.set(source, image);
      image.addEventListener("load", () => {
        if (reduce || paused) draw(0);
      }, { once: true });
    });

    const makeStars = () => {
      const lowPower = width < 768 || (navigator.hardwareConcurrency ?? 8) <= 4;
      const count = lowPower ? 52 : 150;
      frameInterval = 1000 / (lowPower ? 30 : 60);
      stars = Array.from({ length: count }, (_, index) => ({ x: Math.random() * width, y: Math.random() * height, radius: .3 + Math.random() * (index % 17 === 0 ? 1.8 : .85), depth: .2 + Math.random() * .8, phase: Math.random() * Math.PI * 2, color: starColors[index % starColors.length] }));
    };

    const drawSun = (x: number, y: number, radius: number) => {
      context.save();
      const corona = context.createRadialGradient(x, y, radius * .4, x, y, radius * 3.2);
      corona.addColorStop(0, "rgba(255, 205, 88, .28)");
      corona.addColorStop(.35, "rgba(246, 143, 48, .1)");
      corona.addColorStop(1, "rgba(246, 143, 48, 0)");
      context.fillStyle = corona;
      context.beginPath();
      context.arc(x, y, radius * 3.2, 0, Math.PI * 2);
      context.fill();
      const texture = textures.get("/planets/sun.webp");
      if (texture?.complete && texture.naturalWidth) {
        const size = radius * 2.55;
        context.save();
        context.beginPath();
        context.arc(x, y, radius * 1.03, 0, Math.PI * 2);
        context.clip();
        context.globalCompositeOperation = "source-over";
        context.globalAlpha = 1;
        context.drawImage(texture, x - size / 2, y - size / 2, size, size);
        context.restore();
      } else {
        const surface = context.createRadialGradient(x - radius * .35, y - radius * .4, radius * .08, x, y, radius);
        surface.addColorStop(0, "#fff0a8");
        surface.addColorStop(.45, "#f7b84f");
        surface.addColorStop(1, "#c65924");
        context.shadowBlur = radius * .8;
        context.shadowColor = "rgba(244, 149, 48, .9)";
        context.fillStyle = surface;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
    };

    const drawPlanet = (x: number, y: number, radius: number, planet: Planet, rotation = 0) => {
      context.save();
      context.translate(x, y);
      context.rotate((planet.axialTilt ?? 0) + rotation);
      const texture = textures.get(planet.texture);
      if (planet.ring) {
        context.beginPath();
        context.ellipse(0, 0, radius * 1.9, radius * .53, -.08, Math.PI, Math.PI * 2);
        context.strokeStyle = planet.texture.includes("uranus") ? "rgba(164, 226, 236, .36)" : "rgba(239, 207, 139, .58)";
        context.lineWidth = Math.max(1, radius * .2);
        context.shadowBlur = radius * .5;
        context.shadowColor = planet.outer;
        context.stroke();
        context.shadowBlur = 0;
      }
      if (texture?.complete && texture.naturalWidth) {
        const size = radius * (planet.textureScale ?? 2.5);
        const base = context.createRadialGradient(-radius * .32, -radius * .36, radius * .05, 0, 0, radius);
        base.addColorStop(0, planet.inner);
        base.addColorStop(.62, planet.outer);
        base.addColorStop(1, "#070912");
        context.fillStyle = base;
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.fill();
        context.save();
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.clip();
        context.shadowBlur = radius * .65;
        context.shadowColor = planet.outer;
        context.globalCompositeOperation = "source-over";
        context.globalAlpha = 1;
        if (planet.textureCrop) {
          const { sx, sy, sw, sh } = planet.textureCrop;
          context.drawImage(texture, sx, sy, sw, sh, -size / 2, -size / 2, size, size);
        } else {
          context.drawImage(texture, -size / 2, -size / 2, size, size);
        }
        context.restore();
      } else {
        context.shadowBlur = radius * .8;
        context.shadowColor = planet.outer;
        const surface = context.createRadialGradient(-radius * .35, -radius * .4, radius * .08, 0, 0, radius);
        surface.addColorStop(0, planet.inner);
        surface.addColorStop(.6, planet.outer);
        surface.addColorStop(1, "#0b0b18");
        context.fillStyle = surface;
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.fill();
      }
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.strokeStyle = "rgba(255,255,255,.16)";
      context.lineWidth = Math.max(.5, radius * .025);
      context.stroke();
      if (planet.ring) {
        context.beginPath();
        context.ellipse(0, 0, radius * 1.9, radius * .53, -.08, 0, Math.PI);
        context.strokeStyle = planet.texture.includes("uranus") ? "rgba(184, 239, 246, .52)" : "rgba(255, 226, 166, .78)";
        context.lineWidth = Math.max(1, radius * .14);
        context.stroke();
      }
      context.restore();
    };

    function draw(time: number) {
      if (!reduce && !paused && time > 0 && time - lastFrame < frameInterval) {
        if (active) frame = window.requestAnimationFrame(draw);
        return;
      }
      lastFrame = time;
      if (!lastOrbitalTime) lastOrbitalTime = time;
      const orbitalDelta = Math.min(80, Math.max(0, time - lastOrbitalTime));
      lastOrbitalTime = time;
      const scrollBoost = reduce ? 0 : scrollVelocityTarget.current * 14;
      orbitalClock += orbitalDelta * (1 + scrollBoost);
      scrollVelocityTarget.current += (0 - scrollVelocityTarget.current) * 0.08;
      context.clearRect(0, 0, width, height);
      pointer.x += (pointer.targetX - pointer.x) * .055;
      pointer.y += (pointer.targetY - pointer.y) * .055;
      const px = pointer.x / Math.max(width, 1) - .5;
      const py = pointer.y / Math.max(height, 1) - .5;
      const mobile = width < 768;
      const scrollFocus = reduce ? 0 : Math.min(1, scrollProgress.current * 1.35);
      // The themed planet should complete its entrance during the hero scroll,
      // instead of waiting until the very bottom of a long portfolio page.
      const themedScrollFocus = Math.min(1, scrollFocus * 2.2);
      const baseCenterX = mobile ? width * .5 : width * .78;
      const baseCenterY = mobile ? height * .17 : height * .43;
      const centerX = baseCenterX + (width * .5 - baseCenterX) * scrollFocus - px * (30 - scrollFocus * 12);
      const centerY = baseCenterY + (height * .5 - baseCenterY) * scrollFocus - py * (22 - scrollFocus * 8);
      const zoom = 1 + scrollFocus * (mobile ? .12 : .34);
      const maxOrbit = Math.min(width * (mobile ? .52 : .6), height * (mobile ? .42 : .6)) * zoom;
      const orbitYScale = mobile ? .68 : .56;
      const sunRadius = Math.max(24, Math.min(mobile ? 46 : 78, maxOrbit * .13));
      const nearby: Array<{ x: number; y: number }> = [];

      for (const star of stars) {
        let x = star.x - px * star.depth * 32;
        let y = star.y - py * star.depth * 24;
        const distance = Math.hypot(x - pointer.x, y - pointer.y);
        if (supportsPointer && !reduce && distance < 125 && distance > 0) {
          const force = (125 - distance) / 125;
          x += ((x - pointer.x) / distance) * force * 8;
          y += ((y - pointer.y) / distance) * force * 8;
          if (nearby.length < 7) nearby.push({ x, y });
        }
        const pulse = reduce ? .58 : .46 + Math.sin(time * .0012 + star.phase) * .18;
        context.beginPath();
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fillStyle = star.color;
        context.globalAlpha = Math.min(.82, pulse * star.depth + .12);
        context.fill();
        context.globalAlpha = 1;
      }
      if (nearby.length > 1) {
        context.beginPath();
        context.moveTo(nearby[0].x, nearby[0].y);
        nearby.slice(1).forEach((star) => context.lineTo(star.x, star.y));
        context.strokeStyle = "rgba(218, 203, 255, .16)";
        context.lineWidth = .7;
        context.stroke();
      }

      const orbitScaleY = (planet: Planet) => planet.texture === "/planets/mercury.webp"
        ? Math.max(.84, orbitYScale)
        : orbitYScale;
      const renderedPlanets = PLANETS.map((planet) => {
        const angle = planet.phase + (reduce ? 0 : orbitalClock * planet.speed);
        const orbit = maxOrbit * planet.orbit;
        const x = centerX + Math.cos(angle) * orbit;
        const y = centerY + Math.sin(angle) * orbit * orbitScaleY(planet);
        return { planet, x, y, radius: Math.max(4, maxOrbit * planet.radius) };
      });
      renderedPlanets.forEach(({ planet, x, y, radius }) => lastPositions.set(planet.texture, { x, y, radius }));
      const earth = renderedPlanets.find(({ planet }) => planet.texture === "/planets/earth.webp");
      const systemMoon = earth ? {
        x: earth.x + Math.cos(reduce ? -.65 : time * .00018) * Math.max(8, earth.radius * 1.85),
        y: earth.y + Math.sin(reduce ? -.65 : time * .00018) * Math.max(4, earth.radius * .72),
        radius: Math.max(2.2, earth.radius * .28),
      } : null;
      if (systemMoon) lastPositions.set("/system/moon", systemMoon);

      const focusPoint = (theme: SceneTheme) => {
        if (theme === "solar") return { x: centerX, y: centerY, radius: sunRadius };
        const focusedPlanet = renderedPlanets.find(({ planet }) => planet.texture === `/planets/${theme}.webp`);
        return focusedPlanet ?? earth ?? { x: centerX, y: centerY, radius: sunRadius };
      };
      const focusZoom = (theme: SceneTheme) => ({
        solar: 1,
        mercury: 7.2,
        venus: 5.7,
        earth: 4.8,
        mars: 6.1,
        jupiter: 3.2,
        saturn: 3.45,
        uranus: 4.8,
        neptune: 4.8,
      })[theme];
      const themeInitialLevel = (theme: SceneTheme) => theme === "saturn" ? .5 : .72;
      const themeFocusLevel = (theme: SceneTheme, progress: number) => {
        if (theme === "solar") return progress;
        const initial = themeInitialLevel(theme);
        return Math.min(1, initial + progress * (1 - initial));
      };
      const themeAnchor = (theme: SceneTheme, level: number) => {
        if (theme === "solar") {
          return {
            x: centerX + (width / 2 - centerX) * level,
            y: centerY + (height / 2 - centerY) * level,
          };
        }
        const initial = themeInitialLevel(theme);
        const landing = Math.min(1, Math.max(0, (level - initial) / (1 - initial)));
        const topRightX = width * (mobile ? .72 : .79);
        const topRightY = height * (mobile ? .24 : .27);
        return {
          x: topRightX + (width / 2 - topRightX) * landing,
          y: topRightY + (height / 2 - topRightY) * landing,
        };
      };
      const themeCameraZoom = (theme: SceneTheme, level: number) => theme === "solar"
        ? 1 + level * (mobile ? .12 : .34)
        : 1 + (focusZoom(theme) - 1) * level;
      const currentFocus = focusPoint(sceneTheme.current);
      const currentLevel = themeFocusLevel(sceneTheme.current, sceneTheme.current === "solar" ? scrollFocus : themedScrollFocus);
      let cameraProgress = 0;
      let cameraFrom = sceneTheme.current === "solar" ? { x: centerX, y: centerY } : { x: currentFocus.x, y: currentFocus.y };
      let cameraTo = cameraFrom;
      let fromLevel = currentLevel;
      let toLevel = currentLevel;
      let fromZoom = themeCameraZoom(sceneTheme.current, currentLevel);
      let toZoom = fromZoom;
      let fromAnchor = themeAnchor(sceneTheme.current, currentLevel);
      let toAnchor = fromAnchor;
      if (routeTransition.active) {
        const rawProgress = Math.min(1, Math.max(0, (time - routeTransition.started) / 980));
        cameraProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);
        const fromTheme = routeTransition.fromTheme;
        const toTheme = routeTransition.theme;
        const fromScrollFocus = fromTheme === "solar" ? scrollFocus : themedScrollFocus;
        fromLevel = themeFocusLevel(fromTheme, fromScrollFocus);
        toLevel = toTheme === "solar" ? 0 : themeInitialLevel(toTheme);
        const from = focusPoint(fromTheme);
        const to = focusPoint(toTheme);
        const fromTarget = fromTheme === "solar" ? { x: centerX, y: centerY } : from;
        const toTarget = toTheme === "solar" ? { x: centerX, y: centerY } : to;
        cameraFrom = { x: fromTarget.x, y: fromTarget.y };
        cameraTo = { x: toTarget.x, y: toTarget.y };
        fromZoom = themeCameraZoom(fromTheme, fromLevel);
        toZoom = themeCameraZoom(toTheme, toLevel);
        fromAnchor = themeAnchor(fromTheme, fromLevel);
        toAnchor = themeAnchor(toTheme, toLevel);
        if (rawProgress >= 1) {
          sceneTheme.current = routeTransition.theme;
          routeTransition.active = false;
        }
      } else if (sceneTheme.current !== "solar") {
        cameraFrom = { x: currentFocus.x, y: currentFocus.y };
        cameraTo = cameraFrom;
      }
      const cameraDeltaX = cameraTo.x - cameraFrom.x;
      const cameraDeltaY = cameraTo.y - cameraFrom.y;
      const cameraDistance = Math.max(1, Math.hypot(cameraDeltaX, cameraDeltaY));
      const arc = routeTransition.active ? Math.sin(cameraProgress * Math.PI) * Math.min(72, cameraDistance * .12) : 0;
      const cameraX = cameraFrom.x + cameraDeltaX * cameraProgress - cameraDeltaY / cameraDistance * arc;
      const cameraY = cameraFrom.y + cameraDeltaY * cameraProgress + cameraDeltaX / cameraDistance * arc;
      const cameraZoom = fromZoom + (toZoom - fromZoom) * cameraProgress;
      const viewportAnchorX = fromAnchor.x + (toAnchor.x - fromAnchor.x) * cameraProgress;
      const viewportAnchorY = fromAnchor.y + (toAnchor.y - fromAnchor.y) * cameraProgress;
      const visualTheme = routeTransition.active ? routeTransition.theme : sceneTheme.current;

      context.save();
      context.translate(viewportAnchorX, viewportAnchorY);
      context.scale(cameraZoom, cameraZoom);
      context.translate(-cameraX, -cameraY);
      context.save();
      context.translate(centerX, centerY);
      PLANETS.forEach((planet) => {
        const radius = maxOrbit * planet.orbit;
        context.beginPath();
        context.ellipse(0, 0, radius, radius * orbitScaleY(planet), 0, 0, Math.PI * 2);
        context.strokeStyle = visualTheme === "solar" ? "rgba(231, 225, 255, .1)" : "rgba(231, 225, 255, .055)";
        context.lineWidth = 1;
        context.stroke();
      });
      context.restore();
      renderedPlanets.filter(({ y }) => y < centerY).forEach(({ planet, x, y, radius }) => drawPlanet(x, y, radius, planet, orbitalClock * .00012));
      context.save();
      context.globalAlpha = visualTheme === "solar" ? 1 : .48;
      drawSun(centerX, centerY, sunRadius);
      context.restore();
      if (!reduce && !paused) {
        const flareCycle = (time % 11000) / 11000;
        if (flareCycle < .09) {
          const flare = flareCycle / .09;
          context.save();
          context.globalAlpha = Math.sin(flare * Math.PI) * .55;
          context.strokeStyle = "rgba(255, 184, 79, .8)";
          context.lineWidth = 1.2;
          context.shadowBlur = 14;
          context.shadowColor = "rgba(255, 120, 42, .8)";
          context.beginPath();
          context.arc(centerX, centerY, sunRadius * (1.1 + flare * .8), -.9, .45);
          context.stroke();
          context.restore();
        }
      }
      renderedPlanets.filter(({ y }) => y >= centerY).forEach(({ planet, x, y, radius }) => drawPlanet(x, y, radius, planet, orbitalClock * .00012));
      if (systemMoon) drawPlanet(systemMoon.x, systemMoon.y, systemMoon.radius, MOON, orbitalClock * .00035);
      context.restore();

      if (!reduce && !paused && active) {
        const comet = (time % 13000) / 13000;
        if (comet < .16) {
          const progress = comet / .16;
          const x = width * (1.08 - progress * .72);
          const y = height * (.06 + progress * .3);
          const trail = context.createLinearGradient(x, y, x + 120, y - 60);
          trail.addColorStop(0, "rgba(255, 232, 171, .9)");
          trail.addColorStop(1, "rgba(255, 158, 74, 0)");
          context.strokeStyle = trail;
          context.lineWidth = 1.2;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(x + 120, y - 60);
          context.stroke();
        }
        frame = window.requestAnimationFrame(draw);
      }
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      pointer.x = pointer.targetX = width / 2;
      pointer.y = pointer.targetY = height / 2;
      makeStars();
      if (reduce || paused) draw(0);
    };
    const onPointerMove = (event: PointerEvent) => { if (supportsPointer && !reduce) { pointer.targetX = event.clientX; pointer.targetY = event.clientY; } };
    const onPointerLeave = () => { pointer.targetX = width / 2; pointer.targetY = height / 2; };
    const onRouteFocus = (event: Event) => {
      const detail = (event as CustomEvent<{ theme: SceneTheme; reduced: boolean }>).detail;
      const nextTheme = detail.theme;
      if (reduce || detail.reduced) {
        sceneTheme.current = nextTheme;
        draw(0);
        return;
      }
      const currentScene = sceneTheme.current;
      routeTransition = { active: true, started: performance.now(), fromTheme: currentScene, theme: nextTheme };
      galaxyRef.current?.classList.add("is-route-focus");
      window.clearTimeout(routeTimer);
      routeTimer = window.setTimeout(() => {
        sceneTheme.current = nextTheme;
        routeTransition.active = false;
        galaxyRef.current?.classList.remove("is-route-focus");
      }, 1040);
    };
    const onVisibilityChange = () => {
      active = !reduce && !paused && !document.hidden;
      window.cancelAnimationFrame(frame);
      if (active) frame = window.requestAnimationFrame(draw);
    };
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("cosmic-route-focus", onRouteFocus);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    resize();
    if (active) frame = window.requestAnimationFrame(draw);
    return () => { window.cancelAnimationFrame(frame); window.clearTimeout(routeTimer); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", onPointerMove); window.removeEventListener("cosmic-route-focus", onRouteFocus); document.documentElement.removeEventListener("pointerleave", onPointerLeave); document.removeEventListener("visibilitychange", onVisibilityChange); };
  }, [paused, reduce]);

  return <div ref={galaxyRef} className="galaxy" aria-hidden="true"><canvas ref={canvasRef} className="galaxy-canvas" /><div className="solar-haze" /><div className="galaxy-vignette" /></div>;
}
