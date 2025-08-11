import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Github, Globe } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Modal from "../helper/Modal";

/* ===== Gradients for skill chips ===== */
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

/* ===== Card entrance ===== */
const cardVariants = {
  initial: { opacity: 0, y: 16, scale: 0.98 },
  inView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ===== Chip helper ===== */
const Chip = ({ t, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, y: 6, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${gradientFor(
      t
    )} shadow-sm ring-1 ring-white/10`}
  >
    {t}
  </motion.span>
);

export default function ProjectCard({ project, i = 0 }) {
  const cardRef = useRef(null);

  // Toggles
  const [openTech, setOpenTech] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  // Gallery state
  const images = Array.isArray(project?.images) ? project.images : [];
  const [idx, setIdx] = useState(0);
  const hasImages = images.length > 0;
  const next = () => setIdx((n) => (n + 1) % images.length);
  const prev = () => setIdx((n) => (n - 1 + images.length) % images.length);

  // 🔹 Add the arrow key navigation :
  useEffect(() => {
    if (!showGallery || !hasImages) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showGallery, hasImages, next, prev]);

  // Split visible/hidden tech
  const MAX = 8;
  const { visibleTech, hiddenTech } = useMemo(() => {
    const all = project?.tech || [];
    return { visibleTech: all.slice(0, MAX), hiddenTech: all.slice(MAX) };
  }, [project?.tech]);

  // cursor spotlight
  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--x", `50%`);
    el.style.setProperty("--y", `50%`);
  };

  return (
    <>
      <motion.article
        ref={cardRef}
        variants={cardVariants}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.5, delay: i * 0.04 }}
        className="group relative rounded-2xl p-[1px] transition-transform duration-300"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Subtle gradient border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-300/40 via-bg-soft/30 to-brand-700/30 opacity-60 blur-[3px]" />

        {/* Cursor spotlight */}
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

            {/* Tech chips */}
            <motion.div layout className="mb-5">
              <div className="flex flex-wrap gap-2 items-center">
                {visibleTech.map((t, i) => (
                  <Chip key={t} t={t} delay={i * 0.03} />
                ))}

                <AnimatePresence initial={false}>
                  {openTech &&
                    hiddenTech.map((t, i) => (
                      <motion.span
                        key={t}
                        layout
                        initial={{ opacity: 0, scale: 0.95, y: -6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -6 }}
                        transition={{ duration: 0.25, delay: i * 0.02 }}
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
                    onClick={() => setOpenTech((v) => !v)}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition-colors self-center"
                    whileTap={{ scale: 0.98 }}
                    aria-expanded={openTech}
                  >
                    {openTech ? (
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

            {/* Actions */}
            <div className="flex flex-wrap gap-2 mb-2">
              {Array.isArray(project?.details) &&
                project.details.length > 0 && (
                  <button
                    onClick={() => setShowDetails(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/90 hover:bg-white/10"
                  >
                    Show details
                  </button>
                )}
              {hasImages && (
                <button
                  onClick={() => {
                    setIdx(0);
                    setShowGallery(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/90 hover:bg-white/10"
                >
                  Show gallery
                </button>
              )}
            </div>

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

      {/* ===== Details Modal ===== */}
      <Modal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        title={`${project?.title} — Details`}
        subtitle="Feature overview, challenges & learnings"
        size="md"
        contentClassName="bg-[radial-gradient(120%_120%_at_100%_0%,rgba(236,72,153,0.08),transparent_55%),radial-gradient(120%_120%_at_0%_100%,rgba(59,130,246,0.08),transparent_50%)]"
      >
        <div className="space-y-6 text-sm">
          {Array.isArray(project?.details) && project.details.length > 0 && (
            <section>
              <h4 className="mb-2 font-semibold text-white/90">Overview</h4>
              <ul className="list-disc list-inside space-y-1.5 text-white/80">
                {project.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </section>
          )}

          {Array.isArray(project?.challenges) &&
            project.challenges.length > 0 && (
              <section>
                <h4 className="mb-2 font-semibold text-white/90">Challenges</h4>
                <ul className="list-disc list-inside space-y-1.5 text-white/80">
                  {project.challenges.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </section>
            )}

          {Array.isArray(project?.learnings) &&
            project.learnings.length > 0 && (
              <section>
                <h4 className="mb-2 font-semibold text-white/90">Learnings</h4>
                <ul className="list-disc list-inside space-y-1.5 text-white/80">
                  {project.learnings.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </section>
            )}
        </div>
      </Modal>

      {/* ===== Gallery Modal (lightbox) ===== */}
      <Modal
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
        title={`${project?.title} — Gallery`}
        subtitle={
          hasImages
            ? `Use ←/→ keys • ${idx + 1} / ${images.length}`
            : "Use ←/→ keys"
        }
        size="lg" // slightly bigger than details
        contentClassName="bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(120%_120%_at_100%_100%,rgba(34,211,238,0.10),transparent_55%)]"
      >
        {hasImages ? (
          <div>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
              <img
                src={images[idx]}
                alt={`Screenshot ${idx + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />

              {/* counter badge */}
              <span className="absolute right-2 bottom-2 px-2 py-1 text-[11px] rounded bg-black/55 border border-white/10">
                {idx + 1} / {images.length}
              </span>

              {/* nav controls */}
              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15"
                    onClick={prev}
                    aria-label="Previous image"
                  >
                    {/* ChevronLeft icon or your svg */}
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 border border-white/10 hover:bg-white/15"
                    onClick={next}
                    aria-label="Next image"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* thumbs */}
            {images.length > 1 && (
              <div className="mt-3 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {images.map((src, i2) => (
                  <button
                    key={src + i2}
                    onClick={() => setIdx(i2)}
                    className={`relative aspect-video rounded-lg overflow-hidden border transition ${
                      i2 === idx
                        ? "border-brand-400"
                        : "border-white/10 hover:border-white/20"
                    }`}
                    aria-label={`Show screenshot ${i2 + 1}`}
                    aria-current={i2 === idx}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-white/70 text-sm">No images available.</p>
        )}
      </Modal>
    </>
  );
}
