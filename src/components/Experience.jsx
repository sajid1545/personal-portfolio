import { motion } from "framer-motion";
import { Briefcase, Calendar, Check } from "lucide-react";
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
	},
];

const itemVariants = {
	hidden: { opacity: 0, y: 12 },
	show: (i) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, delay: i * 0.06 },
	}),
};

export default function Experience() {
	return (
		<Section id="experience" eyebrow="Background" title="Experience">
			{/* Timeline rail */}
			<div className="relative">
				<div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-500/40 to-transparent" />

				<ul className="space-y-6">
					{roles.map((r, idx) => (
						<motion.li
							key={r.company}
							custom={idx}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, amount: 0.25 }}
							variants={itemVariants}
							className="relative md:pl-14">
							{/* Timeline dot */}
							<div className="hidden md:flex absolute left-5 -translate-x-1/2 top-7 h-3.5 w-3.5 rounded-full bg-brand-500 shadow-[0_0_0_4px_rgba(42,118,255,0.15)]" />

							{/* Card */}
							<article className="glass rounded-2xl p-5 md:p-6 border border-white/5 hover:border-white/10 transition-colors">
								{/* Header */}
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
									<div className="flex items-center gap-3">
										<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
											<Briefcase size={18} />
										</div>
										<div>
											<h3 className="font-display text-xl">
												{r.title} • {r.company}
											</h3>
											<div className="mt-1 flex items-center gap-2 text-sm text-white/60">
												<Calendar size={14} />
												<span>{r.period}</span>
											</div>
										</div>
									</div>

									{/* Period badge (desktop) */}
									<span className="hidden md:inline-flex px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10">
										{r.period}
									</span>
								</div>

								{/* Bullets */}
								<ul className="mt-4 space-y-2">
									{r.bullets.map((b, i) => (
										<li key={i} className="flex items-start gap-2 text-white/80">
											<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 border border-white/10 shrink-0">
												<Check size={14} />
											</span>
											<span className="leading-relaxed">{b}</span>
										</li>
									))}
								</ul>
							</article>
						</motion.li>
					))}
				</ul>
			</div>
		</Section>
	);
}
