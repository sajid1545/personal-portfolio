import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, Github, Globe } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  fadeUp,
  gradientFor,
  PROJECTS,
} from "../../../constants/commonConstants";
import CtaBanner from "../../components/CtaBanner";
import Skills from "../../components/Skills";
import Portrait from "../../components/Potrait";

export default function Landing() {
  return (
    <div className="relative overflow-x-hidden">
      <GradientBackdrop />

      {/* HERO with portrait */}
      <section className="relative container pt-20 md:pt-28 pb-12">
        {/* soft top spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-10 h-40 blur-2xl opacity-30 bg-gradient-to-r from-brand-500/40 via-fuchsia-500/30 to-cyan-400/40"
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
              transition: { duration: 0.7, staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center"
        >
          {/* Text */}
          <div className="md:col-span-7">
            {/* tiny status pill */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
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
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 h-[3px] w-40 origin-left rounded-full bg-gradient-to-r from-brand-400 via-fuchsia-400 to-cyan-400"
                />
              </h1>
            </motion.div>

            {/* subcopy */}
            <motion.p
              {...fadeUp(0.08)}
              className="mt-5 text-white/75 max-w-2xl"
            >
              At <b className="text-white">Zentexx</b> and previously at{" "}
              <b className="text-white">Ekopii</b>, I’ve shipped responsive
              interfaces, engineered secure APIs, and delivered features
              end‑to‑end. React & Tailwind on the front, Node/Express with
              MongoDB or Postgres/Prisma on the back — pragmatic, fast, and
              clean.
            </motion.p>

            {/* CTAs: magnetic hover + shimmer on résumé */}
            <motion.div {...fadeUp(0.16)} className="mt-8 flex flex-wrap gap-3">
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
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

      {/* Skills */}
      <Skills />

      {/* PROJECTS */}
      <section className="container py-8">
        <SectionHeader
          eyebrow="Featured work"
          title="Selected projects"
          kicker="A few builds that highlight how I approach product, polish, and performance."
        />
        <ProjectMasonry projects={PROJECTS} />
      </section>

      {/* CTA */}
      <section className="container py-16">
        <CtaBanner />
      </section>
    </div>
  );
}

/* ================== LOCAL UI HELPERS ================== */

function SectionHeader({ eyebrow, title, kicker }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="mb-3 font-medium text-brand-300">{eyebrow}</p>}
      {title && (
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-2">
          {title}
        </h2>
      )}
      {kicker && <p className="text-white/70">{kicker}</p>}
    </div>
  );
}

function ProjectMasonry({ projects }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-1.2, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.85, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ rotate, opacity }}
      className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} i={i} />
      ))}
    </motion.div>
  );
}

function ProjectCard({ project, i = 0 }) {
  const cardRef = useRef(null);

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  };

  const chip = (t) => (
    <span
      key={t}
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${gradientFor(
        t
      )} shadow-sm`}
    >
      {t}
    </span>
  );

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 14, scale: 0.99, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: i * 0.04 }}
      className="
        group relative rounded-2xl p-5 md:p-6
        border border-white/10 backdrop-blur-lg
        hover:-translate-y-1 transition-all duration-300
        before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
      "
      style={{
        background: `radial-gradient(600px 300px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.08), transparent 40%)`,
      }}
    >
      {/* Cover */}
      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 mb-4">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
            initial={{ scale: 1.01 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-800/50 to-brand-900/30" />
        )}

        {/* Shine */}
        <motion.span
          aria-hidden
          className="absolute -inset-1 pointer-events-none"
          initial={{ x: "-120%" }}
          whileHover={{ x: "130%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "linear-gradient(75deg, transparent 0%, rgba(255,255,255,0.16) 40%, rgba(255,255,255,0.06) 60%, transparent 100%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Content */}
      <h3 className="font-display text-xl mb-2">{project.title}</h3>
      <p className="text-white/70 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech?.slice(0, 8).map(chip)}
        {project.tech?.length > 8 && (
          <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10">
            +{project.tech.length - 8} more
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        {project.frontend && (
          <a
            href={project.frontend}
            target="_blank"
            rel="noreferrer"
            className="chip hover:bg-white/15 transition-colors"
          >
            <Github size={16} /> Frontend
          </a>
        )}
        {project.backend && (
          <a
            href={project.backend}
            target="_blank"
            rel="noreferrer"
            className="chip hover:bg-white/15 transition-colors"
          >
            <Github size={16} /> Backend
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="chip hover:bg-white/15 transition-colors"
          >
            <Globe size={16} /> Live
          </a>
        )}
      </div>
    </motion.article>
  );
}

function GradientBackdrop() {
  // Scroll-linked subtle depth; fixed + clipped to avoid overflow
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.85]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ scale, opacity }}
    >
      {/* spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(42,118,255,0.10),transparent_70%)]" />
      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.07] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </motion.div>
  );
}
