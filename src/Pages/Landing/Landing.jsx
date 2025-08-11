import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { useRef } from "react";
import { gradientFor, PROJECTS } from "../../../constants/commonConstants";
import CtaBanner from "../../components/CtaBanner";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import HeroBanner from "../../components/HeroBanner";
import Skills from "../../components/Skills";

export default function Landing() {
  return (
    <div className="relative overflow-x-hidden">
      <GradientBackdrop />

      {/* HERO with portrait */}
      <HeroBanner />

      {/* Skills */}
      <Skills />

      {/* Education */}
      <section className="container py-8 md:py-16">
        <Education />
      </section>

      {/* Experience */}
      <section className="container py-8 md:py-16">
        <Experience />
      </section>

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
