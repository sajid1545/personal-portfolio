import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, Github, Globe } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  fadeUp,
  gradientFor,
  IMG_URL,
  PROJECTS,
} from "../../../constants/commonConstants";
import CtaBanner from "../../components/CtaBanner";
import Skills from "../../components/Skills";

export default function Landing() {
  return (
    <div className="relative overflow-x-hidden">
      <GradientBackdrop />

      {/* HERO with portrait */}
      <section className="relative container pt-20 md:pt-28 pb-10">
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
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <p className="mb-3 inline-flex items-center gap-2 text-brand-300">
                <Briefcase size={16} /> Full-Stack Developer • Chittagong, BD
              </p>
              <h1 className="font-display text-4xl md:text-6xl tracking-tight">
                Building <span className="text-brand-300">scalable</span>,{" "}
                <span className="text-brand-300">user-focused</span> web apps.
              </h1>
            </motion.div>

            <motion.p
              {...fadeUp(0.08)}
              className="mt-5 text-white/75 max-w-2xl"
            >
              At <b>Zentexx</b> and previously at <b>Ekopii</b>, I’ve shipped
              responsive interfaces, engineered secure APIs, and delivered
              features end-to-end. React & Tailwind on the front, Node/Express
              with MongoDB or Postgres/Prisma on the back — pragmatic, fast, and
              clean.
            </motion.p>

            <motion.div {...fadeUp(0.16)} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="px-5 py-3 rounded-full bg-brand-500 hover:bg-brand-400 transition-colors shadow-soft inline-flex items-center gap-2"
              >
                View projects <ArrowRight size={18} />
              </Link>
              <a
                href="/resume.pdf"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10"
              >
                Download résumé
              </a>
            </motion.div>
          </div>

          {/* Portrait (hidden on small screens to keep it minimal) */}
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

function Portrait() {
  // Soft parallax tied to card visibility
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.02, 0.98]);

  // Gentle float loop as a base
  const float = {
    initial: { y: 0 },
    animate: { y: [-2, 2, -2] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="hidden md:block"
    >
      <motion.div
        {...float}
        style={{ y, scale, willChange: "transform" }}
        className="relative max-w-sm ml-auto"
      >
        {/* Soft blob behind */}
        <div className="absolute -inset-6 -z-10 bg-[radial-gradient(60%_60%_at_60%_40%,rgba(42,118,255,0.20),transparent_70%)]" />

        {/* Frame */}
        <div className="rounded-3xl p-1 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-soft backdrop-blur">
          <div className="relative overflow-hidden rounded-2xl">
            {/* subtle top light */}
            <div className="pointer-events-none absolute inset-x-0 -top-1 h-28 bg-gradient-to-b from-white/15 to-transparent" />
            <img
              src={IMG_URL}
              alt="Portrait of Sajjad Abdullah"
              loading="lazy"
              className="block w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml;utf8," +
                  encodeURIComponent(
                    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='#334155'/><stop offset='1' stop-color='#0f172a'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' opacity='0.5' font-family='sans-serif' font-size='28'>Your photo goes here</text></svg>`
                  );
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
  const chip = (t) => (
    <span
      key={t}
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${gradientFor(
        t
      )}`}
    >
      {t}
    </span>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
      className="glass rounded-2xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-300"
    >
      <div className="aspect-video rounded-xl overflow-hidden border border-white/5 mb-4">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-800/50 to-brand-900/30" />
        )}
      </div>

      <h3 className="font-display text-xl mb-2">{project.title}</h3>
      <p className="text-white/70 leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech?.slice(0, 8).map(chip)}
        {project.tech?.length > 8 && (
          <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10">
            +{project.tech.length - 8} more
          </span>
        )}
      </div>

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
