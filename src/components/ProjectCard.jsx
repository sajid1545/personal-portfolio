import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Github, Globe } from "lucide-react";
import { useMemo, useState } from "react";

const skillGradients = {
  "React.js": "from-cyan-500 to-blue-500",
  React: "from-cyan-500 to-blue-500",
  Tailwind: "from-sky-400 to-indigo-500",
  "Tailwind CSS": "from-sky-400 to-indigo-500",
  TypeScript: "from-blue-400 to-indigo-600",
  JavaScript: "from-yellow-400 to-orange-500",
  "Next.js": "from-gray-700 to-gray-900",
  MongoDB: "from-green-400 to-emerald-600",
  "Postgres SQL": "from-sky-400 to-indigo-500",
  Prisma: "from-purple-400 to-indigo-500",
  "Express.js": "from-yellow-500 to-orange-600",
  Firebase: "from-yellow-400 to-orange-500",
  Redux: "from-purple-500 to-pink-500",
  "Material UI": "from-blue-500 to-indigo-500",
  Stripe: "from-indigo-500 to-purple-500",
  JWT: "from-orange-400 to-red-500",
};

const gradientFor = (t) => skillGradients[t] || "from-pink-500 to-rose-500";

const cardVariants = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  inView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.03 },
  }),
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.2 } },
};

export default function ProjectCard({ project, i = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const MAX = 8;

  const { visibleTech, hiddenTech } = useMemo(() => {
    const all = project?.tech || [];
    return {
      visibleTech: all.slice(0, MAX),
      hiddenTech: all.slice(MAX),
    };
  }, [project?.tech]);

  const chip = (t, idx) => (
    <motion.span
      key={t}
      custom={idx}
      variants={chipVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${gradientFor(
        t
      )} shadow-sm ring-1 ring-white/10`}
    >
      {t}
    </motion.span>
  );

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
      className="group relative rounded-2xl p-[1px] transition-transform duration-300"
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
      }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-300/40 via-bg-soft/30 to-brand-700/30 opacity-60 blur-[3px]" />

      {/* Hover spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.10), transparent 40%)",
        }}
      />

      {/* Glass card surface */}
      <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-xl overflow-hidden">
        {/* Cover */}
        <motion.div
          className="relative aspect-video overflow-hidden border-b border-white/5"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
        >
          {project?.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-800/50 to-brand-900/30" />
          )}

          {/* Shimmer sweep */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              className="absolute -inset-y-8 -left-1/4 w-1/3 rotate-12 bg-white/20 blur-2xl"
              initial={{ x: "-40%" }}
              whileHover={{ x: "140%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>

          {/* Readability fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent" />
        </motion.div>

        {/* Body */}
        <div className="p-5 md:p-6">
          <h3 className="font-display text-xl md:text-2xl tracking-tight text-white mb-1">
            {project?.title}
          </h3>
          <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base">
            {project?.description}
          </p>

          {/* Tech chips with Show more / Show less */}
          <motion.div layout className="mb-5">
            <div className="flex flex-wrap gap-2">
              {visibleTech.map((t, idx) => chip(t, idx))}
              {/* Hidden chips - animated reveal */}
              <AnimatePresence initial={false}>
                {expanded &&
                  hiddenTech.map((t, idx) => (
                    <motion.span
                      key={t}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: -6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -6 }}
                      transition={{ duration: 0.25, delay: idx * 0.02 }}
                      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${gradientFor(
                        t
                      )} shadow-sm ring-1 ring-white/10`}
                    >
                      {t}
                    </motion.span>
                  ))}
              </AnimatePresence>

              {hiddenTech.length > 0 && (
                <motion.button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors"
                  whileTap={{ scale: 0.98 }}
                  aria-expanded={expanded}
                  aria-label={
                    expanded ? "Show less skills" : "Show more skills"
                  }
                >
                  {expanded ? (
                    <>
                      Show less <ChevronUp size={14} />
                    </>
                  ) : (
                    <>
                      +{hiddenTech.length} more <ChevronDown size={14} />
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Links */}
          <div className="flex flex-wrap gap-2">
            {project?.frontend && (
              <motion.a
                href={project.frontend}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <Github size={16} /> Frontend
              </motion.a>
            )}
            {project?.backend && (
              <motion.a
                href={project.backend}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <Github size={16} /> Backend
              </motion.a>
            )}
            {project?.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-100 outline-none transition hover:bg-emerald-400/15 focus-visible:ring-2 focus-visible:ring-emerald-300/30"
              >
                <Globe size={16} /> Live
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
