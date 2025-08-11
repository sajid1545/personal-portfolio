import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Building2, Calendar, Check } from "lucide-react";
import Section from "./Section";

const roles = [
  {
    company: "Zentexx",
    title: "Full Stack Developer",
    period: "June 2024 – Present",
    bullets: [
      "Built responsive UIs with React.js, Tailwind CSS, HTML5, and CSS3.",
      "Developed secure APIs with Express.js, integrated MongoDB with Mongoose.",
      "Worked across full stack ensuring seamless integration and high performance.",
    ],
    tag: "Current",
  },
  {
    company: "Ekopii",
    title: "Associate Software Engineer",
    period: "Jan 2023 – Nov 2023",
    bullets: [
      "Developed frontend with React.js and backend with Node.js/Express.js.",
      "Integrated frontend and backend using REST APIs.",
      "Managed MongoDB databases for data storage and retrieval.",
    ],
    tag: "Full-time",
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

  return (
    <Section id="experience" eyebrow="Background" title="Experience">
      <div className="relative">
        {/* Decorative vertical rail (better alignment, subtler glow) */}
        <div
          className="hidden md:block absolute left-6 top-0 bottom-0 w-px"
          aria-hidden
        >
          <span className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/35 to-transparent" />
          {!reduce && (
            <motion.span
              className="absolute left-1/2 -translate-x-1/2 h-24 w-[3px] rounded-full bg-brand-400/70 blur-[2px]"
              initial={{ y: -60, opacity: 0.85 }}
              animate={{ y: [0, 600, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-6"
        >
          {roles.map((r) => (
            <motion.li
              key={r.company}
              variants={item}
              className="relative md:pl-16"
            >
              {/* Timeline node */}
              <div className="hidden md:flex absolute left-6 -translate-x-1/2 top-9 h-4 w-4 items-center justify-center">
                <span className="absolute h-4 w-4 rounded-full bg-brand-500/90 shadow-[0_0_0_6px_rgba(42,118,255,0.10)]" />
                {!reduce && (
                  <span className="absolute h-8 w-8 rounded-full bg-brand-400/18 blur-md" />
                )}
              </div>

              {/* Card */}
              <article className="group relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_12%),radial-gradient(120%_120%_at_50%_-20%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(120%_120%_at_100%_0%,rgba(236,72,153,0.08),transparent_50%),radial-gradient(120%_120%_at_100%_100%,rgba(34,211,238,0.08),transparent_40%)] bg-[#0b121b]/60 backdrop-blur-md transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_30px_-8px_rgba(0,0,0,0.45)] hover:border-white/20">
                {/* top accent — clipped + faded ends to match rounded corners */}
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

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/7 border border-white/10 shadow-inner">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl leading-tight">
                        {r.title} • {r.company}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-sm text-white/60">
                        <Calendar size={14} />
                        <span>{r.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tag + period badge */}
                  <div className="flex items-center gap-2">
                    {r.tag && (
                      <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                        {r.tag}
                      </span>
                    )}
                    <span className="hidden md:inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10">
                      {r.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-4 grid gap-2">
                  {r.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white/80"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/8 border border-white/10 shrink-0 text-white/70">
                        <Check size={14} />
                      </span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom subtle divider */}
                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Company meta */}
                <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                  <Building2 size={14} />
                  <span>{r.company}</span>
                </div>

                {/* hover glow (subtler) */}
                <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(99,102,241,0.10),transparent_40%),radial-gradient(120%_120%_at_100%_0%,rgba(236,72,153,0.08),transparent_40%),radial-gradient(120%_120%_at_100%_100%,rgba(34,211,238,0.08),transparent_40%)]" />
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
