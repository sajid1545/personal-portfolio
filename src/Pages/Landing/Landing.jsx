import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, Github, Globe } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import CtaBanner from "../../components/CtaBanner";
import Skills from "../../components/Skills";

/* ================== CONFIG ================== */
// Replace with your actual file in /public
const IMG_URL = "/sajjad.png";

// Gradient per tech for pretty chips
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
  };
  return map[t] || "from-violet-500 to-fuchsia-600";
};

// Featured projects (covers + repos + live)
const PROJECTS = [
  {
    id: "foundit",
    title: "FoundIt (Lost & Found Management)",
    description:
      "End-to-end platform for reporting, searching, and claiming lost/found items with role-based dashboards, advanced search, and admin oversight.",
    image: "https://i.ibb.co.com/zhNmntNS/Screenshot-1.png",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Postgres SQL",
      "Prisma ORM",
      "Express.js",
      "JWT",
      "Redux",
      "Zod",
      "React Hook Form",
    ],
    frontend: "https://github.com/sajid1545/FoundIt-client",
    backend: "https://github.com/sajid1545/FoundIt-server",
    live: "https://assignment-9-client.vercel.app/",
  },
  {
    id: "laptop-city",
    title: "Laptop City",
    description:
      "Reseller platform with buyer/seller roles, JWT-secured dashboards, Stripe payments, and admin tools.",
    image: "https://i.ibb.co/5R4PYgk/Laptop-city.jpg",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "JWT",
    ],
    frontend: "https://github.com/sajid1545/laptop-city-cllient",
    backend: "https://github.com/sajid1545/laptop-city-server",
    live: "https://whimsical-pavlova-5e8a87.netlify.app/",
  },
  {
    id: "nikah-photo",
    title: "Nikah Photography",
    description:
      "Personal service app for event bookings and reviews with secure login and CRUD flows.",
    image: "https://i.ibb.co/DkC0Q04/Nikah-photography.jpg",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
    ],
    frontend: "https://github.com/sajid1545/Nikah-photography_client",
    backend: "https://github.com/sajid1545/Nikah-photography_server",
    live: "https://assignment-11-cf2b9.web.app/",
  },
];

// entry animation helper
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16, filter: "blur(2px)" },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay },
  },
  viewport: { once: true, amount: 0.55 },
});

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
  // Hover elevation with glassy shadow
  const elev = useSpring(0, { stiffness: 220, damping: 26, mass: 0.3 });
  const boxShadow = useTransform(elev, (v) => {
    const y = 8 + v * 10;
    const blur = 20 + v * 24;
    const alpha = 0.14 + v * 0.18;
    return `0 ${y}px ${blur}px rgba(42,118,255,${alpha})`;
  });

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
      style={{ boxShadow }}
      onHoverStart={() => elev.set(1)}
      onHoverEnd={() => elev.set(0)}
      initial={{ opacity: 0, y: 16, scale: 0.98, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
      className="rounded-2xl p-5 md:p-6 border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-video rounded-xl overflow-hidden border border-white/5 mb-4">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
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
