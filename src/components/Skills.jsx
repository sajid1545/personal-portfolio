import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Handshake, Sparkles, Wrench } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

/* ====== Resume-based groups ====== */
const SKILLS = {
  Frontend: [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "React Router DOM",
    "TypeScript",
    "Redux",
    "React Query",
    "React Hook Form",
    "MUI",
    "Next.js",
    "Ant Design",
  ],
  Backend: [
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Prisma ORM",
    "PostgreSQL",
    "GraphQL",
  ],
  "Tools & Platforms": [
    "GitHub",
    "VS Code",
    "Firebase",
    "Netlify",
    "Chrome DevTools",
    "Vercel",
  ],
};

/* ====== Pretty gradients per tech (fallback provided) ====== */
const gradientFor = (t) => {
  const map = {
    HTML5: "from-orange-500 to-red-500",
    CSS3: "from-sky-500 to-indigo-500",
    "Tailwind CSS": "from-sky-400 to-cyan-500",
    JavaScript: "from-yellow-400 to-orange-500",
    TypeScript: "from-blue-400 to-indigo-600",
    "React.js": "from-cyan-500 to-blue-600",
    "React Router DOM": "from-rose-500 to-pink-600",
    "React Query": "from-red-400 to-rose-500",
    Redux: "from-purple-500 to-pink-500",
    "React Hook Form": "from-fuchsia-500 to-pink-600",
    "Express.js": "from-stone-500 to-neutral-700",
    MongoDB: "from-emerald-500 to-green-700",
    Mongoose: "from-lime-500 to-emerald-600",
    MUI: "from-blue-500 to-indigo-500",
    "Next.js": "from-zinc-700 to-neutral-900",
    "Prisma ORM": "from-emerald-400 to-teal-600",
    "Postgres SQL": "from-sky-500 to-blue-700",
    "Ant Design": "from-red-500 to-rose-600",
    GraphQL: "from-pink-500 to-rose-500",
    GitHub: "from-zinc-600 to-neutral-800",
    "VS Code": "from-sky-500 to-blue-600",
    Firebase: "from-amber-400 to-orange-500",
    Netlify: "from-teal-400 to-cyan-600",
    "Chrome DevTools": "from-amber-500 to-red-500",
    Vercel: "from-gray-700 to-black",
  };
  return map[t] || "from-violet-500 to-fuchsia-600";
};

const ICONS = {
  Frontend: Sparkles,
  Backend: Handshake,
  "Tools & Platforms": Wrench,
};

const TABS = ["All", ...Object.keys(SKILLS)];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");
  const [copied, setCopied] = useState("");
  const [showToast, setShowToast] = useState(false);

  const items = useMemo(() => {
    if (activeTab === "All") return Object.values(SKILLS).flat();
    return SKILLS[activeTab] || [];
  }, [activeTab]);

  useEffect(() => {
    if (!copied) return;
    setShowToast(true);
    const t = setTimeout(() => setShowToast(false), 900);
    return () => clearTimeout(t);
  }, [copied]);

  const copySkill = async (t) => {
    try {
      await navigator.clipboard.writeText(t);
      setCopied(t);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="skills"
      className="container py-16 md:py-24 relative overflow-x-hidden"
    >
      {/* section ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[1200px] h-[120px] rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.45, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        style={{
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(42,118,255,0.25), rgba(124,58,237,0.15) 70%, transparent 80%)",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <p className="mb-3 font-medium text-brand-300">Toolkit</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-2">
          Skills I use to ship fast and clean
        </h2>
        <p className="text-white/70">
          Switch tabs to explore by depth. Tap a chip to copy the skill name.
        </p>
      </motion.div>

      {/* Tabs with animated pill */}
      <div className="mt-6 inline-flex flex-wrap gap-2 relative">
        <AnimatePresence initial={false}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-3 py-1.5 text-sm rounded-full border transition-all ${
                  isActive ? "text-brand-300" : "text-white/80 hover:text-white"
                }`}
                style={{
                  borderColor: isActive
                    ? "rgba(255,255,255,0.18)"
                    : "rgba(255,255,255,0.10)",
                }}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 -z-10 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 36,
                      mass: 0.4,
                    }}
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      backdropFilter: "blur(6px)",
                    }}
                  />
                )}
                {tab}
              </button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Grid (animated layout) */}
      <motion.div
        layout
        className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        transition={{ layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      >
        {(activeTab === "All"
          ? Object.entries(SKILLS)
          : [[activeTab, items]]
        ).map(([group, groupItems], idx) => {
          const Icon = ICONS[group] || Sparkles;
          return (
            <SkillCard
              key={group}
              idx={idx}
              group={group}
              Icon={Icon}
              items={groupItems}
              onCopy={copySkill}
            />
          );
        })}
      </motion.div>

      {/* Tiny toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-sm">
              <CheckCircle2 size={16} className="text-brand-300" />
              Copied “{copied}”
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ====== Card with tilt, glass shine, and chip cascade ====== */
function SkillCard({ idx, group, Icon, items, onCopy }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // handle tilt without MotionValue.to()
  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    setMouse({ x, y });
  };

  const rotateX = (mouse.y - 0.5) * -6; // subtle
  const rotateY = (mouse.x - 0.5) * 6;

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: idx * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}
      style={{
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        willChange: "transform",
      }}
      className="relative rounded-2xl p-5 md:p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_6px_30px_rgba(24,46,110,0.18)]"
    >
      {/* inner glow ring on hover */}
      <motion.span
        aria-hidden
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{
          background:
            "radial-gradient(120% 60% at 50% 0%, rgba(42,118,255,0.25), rgba(124,58,237,0.20), transparent 70%)",
          maskImage:
            "radial-gradient(100% 100% at 50% 50%, black, transparent)",
        }}
      />

      {/* glass shine that follows cursor */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{
          backgroundPosition: `${mouse.x * 100}% ${mouse.y * 100}%`,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.4 }}
        style={{
          background:
            "radial-gradient(600px 300px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.08), transparent 40%)",
        }}
      />

      <div className="inline-flex items-center gap-2 mb-3 relative z-10">
        <div className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 w-10 h-10">
          <Icon size={18} />
        </div>
        <h3 className="font-display text-lg">{group}</h3>
      </div>

      {/* Chips with cascade + spring */}
      <motion.div
        layout
        className="flex flex-wrap gap-2 relative z-10"
        transition={{ layout: { duration: 0.3 } }}
      >
        {items.map((t, i) => (
          <motion.button
            key={t}
            layout
            onClick={() => onCopy(t)}
            className={`px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${gradientFor(
              t
            )} shadow-sm outline-none focus:ring-2 focus:ring-white/20`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 0.35,
              delay: i * 0.015,
            }}
            title="Click to copy"
          >
            {t}
          </motion.button>
        ))}
      </motion.div>

      {/* subtle bottom highlight */}
      <div className="pointer-events-none absolute inset-x-4 -bottom-2 h-2 rounded-full blur-md opacity-40 bg-gradient-to-r from-brand-500/40 via-fuchsia-500/30 to-cyan-500/40" />
    </motion.article>
  );
}
