import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Calendar,
  ChevronDown,
  GraduationCap,
  School,
} from "lucide-react";
import { useState } from "react";
import Collapsible from "../helper/Collapsible";
import Section from "./Section";

const education = [
  {
    school: "BITHM College of Professionals",
    degree: "BSc in Information Technology",
    period: "2021 – 2024",
    grade: "CGPA 3.55",
    icon: GraduationCap,
    details:
      "Completed a comprehensive IT curriculum covering programming fundamentals, web technologies, databases, and systems concepts. Practiced industry workflows, teamwork, and documentation with a focus on building production-ready web apps.",
  },
  {
    school: "The DUX",
    degree: "A-Level",
    period: "2019 – 2021",
    icon: School,
    details:
      "Advanced coursework with an emphasis on analytical thinking and problem-solving, laying a strong foundation for computer science and engineering studies.",
  },
  {
    school: "Bangladesh School Muscat",
    degree: "O-Level",
    period: "2015 – 2016",
    icon: School,
    details:
      "Core subjects with early exposure to computing and mathematics; developed strong study habits and fundamentals that carried forward into higher education.",
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
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Education() {
  const reduce = useReducedMotion();
  const [openIdx, setOpenIdx] = useState(null); // single-expand
  const toggle = (i) => setOpenIdx((cur) => (cur === i ? null : i));

  return (
    <Section id="education" eyebrow="Background" title="Education">
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
          {education.map((ed, i) => {
            const Icon = ed.icon ?? GraduationCap;
            const isOpen = openIdx === i;
            const panelId = `edu-panel-${i}`;

            return (
              <motion.li
                key={`${ed.school}-${i}`}
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

                  <div className="flex items-start sm:items-center gap-3">
                    <div className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white/10 border border-white/10 shadow-inner">
                      <Icon size={18} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display text-lg sm:text-xl leading-tight">
                        {ed.degree} • {ed.school}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] text-white/70">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                          <Calendar size={12} /> {ed.period}
                        </span>
                        {ed.grade && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                            <Award size={12} /> {ed.grade}
                          </span>
                        )}
                      </div>
                    </div>

                    {ed.details && (
                      <button
                        type="button"
                        className="self-start sm:self-center inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-white/10 border border-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(i)}
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

                  {/* Smooth single animation via Collapsible */}
                  {ed.details && (
                    <Collapsible isOpen={isOpen}>
                      <div
                        id={panelId}
                        className="pt-4 text-white/75 leading-relaxed"
                      >
                        {ed.details}
                      </div>
                    </Collapsible>
                  )}
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </Section>
  );
}
