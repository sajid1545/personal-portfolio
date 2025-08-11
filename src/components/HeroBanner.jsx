import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="relative container pt-20 md:pt-28 pb-12">
      {/* Background effects (behind everything) */}
      <BackgroundFX />

      {/* soft top spotlight (kept, but opacity slightly reduced to blend with FX) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 h-40 blur-2xl opacity-25 bg-gradient-to-r from-brand-500/40 via-fuchsia-500/30 to-cyan-400/40"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              staggerChildren: 0.08,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center relative"
      >
        {/* Text */}
        <div className="md:col-span-7">
          {/* tiny status pill */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Open to collaboration & side projects
          </motion.div>

          {/* headline + animated accent bar */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3"
          >
            <p className="mb-3 inline-flex items-center gap-2 text-brand-300">
              <Briefcase size={16} /> Full‑Stack Developer • Chittagong, BD
            </p>

            <h1 className="font-display text-4xl md:text-6xl tracking-tight relative">
              Building <span className="text-brand-300">scalable</span>,{" "}
              <span className="text-brand-300">user‑focused</span> web apps.
              {/* animated underline bar */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-[3px] w-40 origin-left rounded-full bg-gradient-to-r from-brand-400 via-fuchsia-400 to-cyan-400"
              />
            </h1>
          </motion.div>

          {/* subcopy */}
          <motion.p {...fadeUp(0.08)} className="mt-5 text-white/75 max-w-2xl">
            At <b className="text-white">Zentexx</b> and previously at{" "}
            <b className="text-white">Ekopii</b>, I’ve shipped responsive
            interfaces, engineered secure APIs, and delivered features
            end‑to‑end. React & Tailwind on the front, Node/Express with MongoDB
            or Postgres/Prisma on the back — pragmatic, fast, and clean.
          </motion.p>

          {/* CTAs: magnetic hover + shimmer on résumé */}
          <motion.div {...fadeUp(0.16)} className="mt-8 flex flex-wrap gap-3">
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                to="/projects"
                className="px-5 py-3 rounded-full bg-brand-500 hover:bg-brand-400 transition-colors shadow-soft inline-flex items-center gap-2"
              >
                View projects <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.a
              href="/resume.pdf"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative overflow-hidden px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10"
            >
              {/* subtle shimmer */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent [mask-image:linear-gradient(90deg,transparent,black,transparent)] hover:animate-[shimmer_1.2s_ease-in-out] pointer-events-none" />
              Download résumé
            </motion.a>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="md:col-span-5">
          <Portrait />
        </div>
      </motion.div>
    </section>
  );
}

/**
 * BackgroundFX
 * - Flowing multicolor lines (SVG paths) with animated dash offset
 * - Soft particle field with cursor parallax
 * - Responds to reduced motion
 */
function BackgroundFX() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // gentle parallax when moving the mouse across the section
  const xSlow = useTransform(mx, [-40, 40], [8, -8]);
  const ySlow = useTransform(my, [-40, 40], [8, -8]);
  const xFast = useTransform(mx, [-40, 40], [16, -16]);
  const yFast = useTransform(my, [-40, 40], [16, -16]);

  const onMouseMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    mx.set(Math.max(-40, Math.min(40, x / 10)));
    my.set(Math.max(-40, Math.min(40, y / 10)));
  };

  // Seeded particles
  const particles = useMemo(() => {
    const out = [];
    const COUNT = 42; // balanced for perf
    for (let i = 0; i < COUNT; i++) {
      out.push({
        id: i,
        x: (Math.random() - 0.5) * 1200,
        y: (Math.random() - 0.5) * 500,
        s: Math.random() * 1 + 0.5, // size multiplier
        d: Math.random() * 1.2 + 0.6, // drift speed
        a: Math.random() * 0.45 + 0.35, // base alpha
      });
    }
    return out;
  }, []);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 -z-10 overflow-hidden rounded-[2rem]"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mx.set(0);
        my.set(0);
      }}
      aria-hidden
    >
      {/* particle layer */}
      <motion.div style={{ x: xFast, y: yFast }} className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[800px] pointer-events-none">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `calc(50% + ${p.x}px)`,
                top: `calc(50% + ${p.y}px)`,
                width: 2 * p.s,
                height: 2 * p.s,
                opacity: p.a,
                filter: "blur(0.2px)",
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: [0, 6 * p.d, 0, -6 * p.d, 0],
                      y: [0, -4 * p.d, 0, 4 * p.d, 0],
                      opacity: [p.a * 0.8, p.a, p.a * 0.8],
                    }
              }
              transition={{
                duration: 10 + p.d * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* soft vignette */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(75%_60%_at_50%_40%,black,transparent)]" />
    </motion.div>
  );
}

/**
 * FlowLines
 * - SVG paths with gradient strokes that animate via dashoffset
 * - Uses CSS keyframes for silky 60fps animations
 */
function FlowLines({ reduceMotion }) {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.35)" />
          <stop offset="50%" stopColor="rgba(236,72,153,0.35)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0.35)" />
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(34,211,238,0.25)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.25)" />
        </linearGradient>
        <style>{`
          @keyframes dash {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -1200; }
          }
          .flow { stroke-linecap: round; stroke-linejoin: round; }
        `}</style>
      </defs>

      {/* horizontal sweeps */}
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={`h-${i}`}
          className="flow"
          d={`M -200 ${150 + i * 90} C 300 ${120 + i * 90}, 1300 ${
            180 + i * 90
          }, 1800 ${160 + i * 90}`}
          fill="none"
          stroke="url(#g1)"
          strokeWidth={1.5}
          strokeDasharray="240 960"
          style={
            reduceMotion
              ? undefined
              : { animation: `dash ${18 + i * 2}s linear infinite` }
          }
        />
      ))}

      {/* gentle vertical arcs */}
      {Array.from({ length: 4 }).map((_, i) => (
        <path
          key={`v-${i}`}
          className="flow"
          d={`M ${200 + i * 380} -100 C ${260 + i * 380} 200, ${
            140 + i * 380
          } 600, ${220 + i * 380} 900`}
          fill="none"
          stroke="url(#g2)"
          strokeWidth={1}
          strokeDasharray="180 720"
          style={
            reduceMotion
              ? undefined
              : { animation: `dash ${24 + i * 3}s linear infinite` }
          }
        />
      ))}
    </svg>
  );
}

// ===== Portrait (updated: slightly softened edges + smoother springs) =====
function Portrait({
  src = "/zentexx.webp",
  alt = "Portrait of Sajjad Abdullah",
  size = 360,
  className = "",
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // ===== Scroll-linked transforms =====
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const parallaxScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.985, 1.02, 0.985]
  );
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // ===== Mouse micro-tilt =====
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotX = useSpring(useTransform(my, [-30, 30], [6, -6]), {
    stiffness: 120,
    damping: 14,
    mass: 0.6,
  });
  const rotY = useSpring(useTransform(mx, [-30, 30], [-6, 6]), {
    stiffness: 120,
    damping: 14,
    mass: 0.6,
  });

  // Cursor-parallax layers
  const layerX1 = useTransform(mx, [-30, 30], [10, -10]);
  const layerY1 = useTransform(my, [-30, 30], [10, -10]);
  const layerX2 = useTransform(mx, [-30, 30], [18, -18]);
  const layerY2 = useTransform(my, [-30, 30], [12, -12]);

  // Spotlight that follows cursor
  const spotX = useTransform(mx, [-30, 30], [30, -30]);
  const spotY = useTransform(my, [-30, 30], [30, -30]);

  const onMouseMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    mx.set(Math.max(-30, Math.min(30, x / 8)));
    my.set(Math.max(-30, Math.min(30, y / 8)));
  };

  const particles = useMemo(() => {
    const arr = [];
    const COUNT = 28;
    for (let i = 0; i < COUNT; i++) {
      arr.push({
        id: i,
        x: (Math.random() - 0.5) * 420,
        y: (Math.random() - 0.5) * 420,
        z: Math.random() * 1.2 + 0.4,
        r: Math.random() * 2 + 1.2,
        slow: Math.random() * 0.6 + 0.7,
      });
    }
    return arr;
  }, []);

  const pictureSize = { width: size, height: size };
  const maybe = (val) => (reduceMotion ? undefined : val);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className} hidden md:block`}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        mx.set(0);
        my.set(0);
      }}
      initial={maybe({ opacity: 0, y: 12 })}
      whileInView={maybe({ opacity: 1, y: 0 })}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Interactive portrait"
    >
      {/* Backdrop container for cursor-reactive layers */}
      <div className="pointer-events-none absolute inset-0 -z-30">
        {/* Large soft gradient blob */}
        <motion.div
          style={{ x: layerX1, y: layerY1 }}
          className="absolute -inset-16 blur-3xl opacity-60"
        >
          <motion.div
            animate={maybe({ scale: [1, 1.05, 1], rotate: [0, 10, 0] })}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-[3rem]"
            style={{
              background:
                "radial-gradient(60% 60% at 60% 40%, rgba(59,130,246,0.25), transparent 65%), radial-gradient(50% 50% at 40% 60%, rgba(236,72,153,0.20), transparent 60%)",
            }}
          />
        </motion.div>

        {/* Fine grid with mask fade */}
        <motion.div
          style={{ x: layerX2, y: layerY2 }}
          className="absolute inset-0 opacity-[0.12] rounded-[2rem] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        >
          <div
            className="w-full h-full rounded-[2rem]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </motion.div>

        {/* Ambient particles with depth parallax */}
        <div className="absolute inset-0">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              aria-hidden
              className="absolute rounded-full bg-white/30 shadow-sm"
              style={{
                left: `calc(50% + ${p.x}px)`,
                top: `calc(50% + ${p.y}px)`,
                width: p.r,
                height: p.r,
                filter: "blur(0.2px)",
                transform: "translateZ(0)",
              }}
              animate={maybe({
                y: [0, 4 * p.slow, 0, -4 * p.slow, 0],
                x: [0, 2 * p.slow, 0, -2 * p.slow, 0],
                opacity: [0.5, 0.8, 0.5],
              })}
              transition={{ duration: 8 + p.slow * 6, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Soft spotlight that follows cursor */}
        <motion.div
          aria-hidden
          className="absolute inset-0 mix-blend-screen"
          style={{
            background:
              "radial-gradient(240px 240px at 50% 50%, rgba(255,255,255,0.08), transparent 60%)",
            x: spotX,
            y: spotY,
          }}
        />
      </div>

      <motion.div
        style={{
          y: maybe(parallaxY),
          scale: maybe(parallaxScale),
          rotateX: hovered && !reduceMotion ? rotX : 0,
          rotateY: hovered && !reduceMotion ? rotY : 0,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative max-w-sm ml-auto perspective-[1200px]"
      >
        {/* Circular frame with rotating conic ring */}
        <div className="p-[3px] rounded-full bg-white/5 border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] backdrop-blur-md relative">
          <div className="relative rounded-full overflow-hidden">
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.28), rgba(236,72,153,0.22), rgba(34,211,238,0.26), rgba(59,130,246,0.28))",
                WebkitMask:
                  "radial-gradient(circle at 50% 50%, transparent calc(100% - 8px), black calc(100% - 8px))",
                mask: "radial-gradient(circle at 50% 50%, transparent calc(100% - 8px), black calc(100% - 8px))",
                rotate: maybe(ringRotate),
              }}
              transition={{ duration: 3, ease: "linear" }}
            />

            {/* inner highlight */}
            <div className="pointer-events-none absolute inset-x-0 -top-1 h-24 bg-gradient-to-b from-white/20 to-transparent rounded-t-full" />

            {/* portrait image */}
            <motion.img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="block object-cover rounded-full select-none"
              style={pictureSize}
              initial={maybe({ scale: 1 })}
              whileHover={maybe({ scale: 1.015 })}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              draggable={false}
            />

            {/* subtle top gloss that tilts with the card */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 28%, rgba(255,255,255,0) 48%)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ===== Helpers =====
function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  };
}
