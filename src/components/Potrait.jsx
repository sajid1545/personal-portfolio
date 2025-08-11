import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useMemo, useRef, useState } from "react";

/**
 * Interactive Portrait
 * - Scroll parallax + subtle scale
 * - Micro 3D tilt on hover (with gentle springs)
 * - Rotating conic-gradient ring synced to scroll
 * - Cursor-reactive gradient blobs
 * - Ambient particles with depth parallax
 * - Soft spotlight that follows cursor
 * - Respects prefers-reduced-motion
 */

export default function Portrait({
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
    damping: 12,
    mass: 0.6,
  });
  const rotY = useSpring(useTransform(mx, [-30, 30], [-6, 6]), {
    stiffness: 120,
    damping: 12,
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

  // ===== Pointer handler =====
  const onMouseMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    mx.set(Math.max(-30, Math.min(30, x / 8)));
    my.set(Math.max(-30, Math.min(30, y / 8)));
  };

  // ===== Ambient particles (one-time seeded positions) =====
  const particles = useMemo(() => {
    const arr = [];
    const COUNT = 28;
    for (let i = 0; i < COUNT; i++) {
      arr.push({
        id: i,
        // random positions in a ring-ish area around the portrait
        x: (Math.random() - 0.5) * 420,
        y: (Math.random() - 0.5) * 420,
        z: Math.random() * 1.2 + 0.4, // depth scaling (0.4 - 1.6)
        r: Math.random() * 2 + 1.2, // radius
        slow: Math.random() * 0.6 + 0.7,
      });
    }
    return arr;
  }, []);

  const pictureSize = {
    width: size,
    height: size,
  };

  // Motion-safe helpers
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
      transition={{ duration: 0.6 }}
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
            animate={maybe({
              scale: [1, 1.05, 1],
              rotate: [0, 10, 0],
            })}
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

        {/* Soft spotlight that follows cursor (mix-blend for subtle glow) */}
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
