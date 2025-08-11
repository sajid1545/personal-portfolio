import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  Laptop,
  MapPin,
  User2,
} from "lucide-react";
import { useState } from "react";
import Collapsible from "../helper/Collapsible";
import Section from "./Section";

const roles = [
  {
    company: "Zentexx",
    title: "Full Stack Developer",
    period: "Jun 2024 – Present",
    employment: "Full-time",
    location: "Chattogram, Bangladesh",
    mode: "On-site",
    bullets: [
      "Shipped responsive UIs with React + Tailwind; audited for a11y and CLS.",
      "Built/secured REST APIs in Express; data modeling with MongoDB/Mongoose.",
      "Owned features end-to-end and profiled performance with Chrome DevTools.",
    ],
    tech: ["React", "Tailwind", "Express", "MongoDB", "Mongoose", "Postman"],
    tag: "Current",
    details:
      "At Zentexx I contribute across the stack: accessible React interfaces with Tailwind, secure Express endpoints backed by MongoDB/Mongoose, validation with Postman, and performance tuning using Chrome DevTools.",
  },
  {
    company: "Ekopii",
    title: "Associate Software Engineer",
    period: "Jan 2023 – Nov 2023",
    employment: "Full-time",
    location: "Dhaka, Bangladesh",
    mode: "Remote",
    bullets: [
      "Delivered full-stack features with React, Node/Express, and MongoDB.",
      "Integrated FE/BE via REST; implemented auth, forms, and dashboards.",
      "Built a production e-commerce flow (catalog → cart → checkout).",
    ],
    tech: ["React", "Node", "Express", "MongoDB", "REST"],
    details:
      "Owned key surfaces of a full-stack e-commerce platform: catalog, cart, and checkout. Implemented RESTful integrations, tightened validation, and optimized render patterns for smoother UX.",
  },
  {
    company: "Rework AI",
    title: "Front-end Developer Intern",
    period: "Jan 2023 – Apr 2023",
    employment: "Internship",
    location: "India",
    mode: "Remote",
    bullets: [
      "Built reusable UI components (forms, tables, modals) in React.",
      "Reduced re-renders and trimmed bundle size for faster loads.",
    ],
    tech: ["React", "Tailwind"],
    details:
      "Developed reusable components with React + Tailwind, focusing on performance and maintainability across multiple surfaces.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Experience() {
  const reduce = useReducedMotion();
  const [expanded, setExpanded] = useState(null); // single-expand
  const toggle = (idx) => setExpanded((cur) => (cur === idx ? null : idx));

  return (
    <Section id="experience" eyebrow="Background" title="Experience">
      <div className="relative overflow-visible">
        {/* Timeline rail */}
        <div
          className="pointer-events-none hidden md:block absolute left-6 top-0 bottom-0 w-px z-30"
          aria-hidden
        >
          <span className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-400/40 to-transparent" />
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-5 sm:space-y-6"
        >
          {roles.map((r, idx) => {
            const isOpen = expanded === idx;
            const panelId = `exp-panel-${idx}`;

            return (
              <motion.li
                key={`${r.company}-${idx}`}
                variants={item}
                className="relative pl-4 sm:pl-6 md:pl-16"
              >
                {/* Mobile dot */}
                <div className="absolute left-0 top-5 h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_0_4px_rgba(75,142,255,0.20)] md:hidden" />
                {/* MD+ node */}
                <div className="hidden md:flex absolute left-6 -translate-x-1/2 top-9 h-4 w-4 items-center justify-center z-40">
                  <span className="absolute h-4 w-4 rounded-full bg-brand-400 shadow-[0_0_0_6px_rgba(75,142,255,0.20)]" />
                  {!reduce && (
                    <span className="absolute h-8 w-8 rounded-full bg-brand-300/25 blur-md" />
                  )}
                </div>

                {/* Card */}
                <article
                  className="group relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_12%),radial-gradient(120%_120%_at_50%_-20%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(120%_120%_at_100%_0%,rgba(236,72,153,0.08),transparent_50%),radial-gradient(120%_120%_at_100%_100%,rgba(34,211,238,0.08),transparent_40%)]
                    bg-[#0b121b]/60 backdrop-blur-md transition-colors duration-300
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_30px_-8px_rgba(0,0,0,0.45)]
                    hover:border-white/20"
                >
                  {!reduce && (
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute top-0 inset-x-4 h-px rounded-full bg-gradient-to-r from-brand-400 via-fuchsia-400 to-cyan-400"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      style={{
                        transformOrigin: "0 0",
                        WebkitMask:
                          "linear-gradient(90deg,transparent,black 8%,black 92%,transparent)",
                        mask: "linear-gradient(90deg,transparent,black 8%,black 92%,transparent)",
                      }}
                    />
                  )}

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white/10 border border-white/10 shadow-inner">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg sm:text-xl leading-tight">
                          {r.title} • {r.company}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] text-white/70">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                            <User2 size={12} /> {r.employment}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                            <Laptop size={12} /> {r.mode}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                            <MapPin size={12} /> {r.location}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                            <Calendar size={12} /> {r.period}
                          </span>
                          {r.tag && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-emerald-300 bg-emerald-400/10 border border-emerald-400/20">
                              {r.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {r.details && (
                      <button
                        type="button"
                        className="self-start md:self-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-white/10 border border-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(idx)}
                      >
                        {isOpen ? "Hide details" : "Show details"}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Bullets */}
                  <ul className="mt-4 grid gap-2">
                    {r.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-white/80"
                      >
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 border border-white/10 shrink-0 text-white/70">
                          <Check size={14} />
                        </span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Smooth single animation via Collapsible */}
                  {r.details && (
                    <Collapsible isOpen={isOpen}>
                      <div
                        id={panelId}
                        className="pt-4 text-white/75 leading-relaxed"
                      >
                        {r.details}
                      </div>
                    </Collapsible>
                  )}

                  {!!r.tech?.length && (
                    <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2 text-[11px] text-white/70">
                      {r.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                    <Building2 size={14} />
                    <span>{r.company}</span>
                  </div>

                  <span
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-[radial-gradient(120%_120%_at_0%_0%,rgba(99,102,241,0.10),transparent_40%),radial-gradient(120%_120%_at_100%_0%,rgba(236,72,153,0.08),transparent_40%),radial-gradient(120%_120%_at_100%_100%,rgba(34,211,238,0.08),transparent_40%)]"
                  />
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </Section>
  );
}
