import { motion } from "framer-motion";
import { Handshake, Lightbulb, Sparkles, Wrench } from "lucide-react";

// Resume-based groups
const SKILLS = {
	Expertise: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js", "React Router DOM"],
	Comfortable: [
		"TypeScript",
		"Express.js",
		"MongoDB",
		"React Query",
		"Redux",
		"React Hook Form",
		"Mongoose",
		"MUI",
	],
	Familiar: ["Next.js", "Prisma ORM", "Postgres SQL", "Ant Design", "GraphQL"],
	Tools: ["GitHub", "VS Code", "Firebase", "Netlify", "Chrome DevTools"],
};

// Pretty gradients per tech (fallback provided)
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

const icons = {
	Expertise: Sparkles,
	Comfortable: Handshake,
	Familiar: Lightbulb,
	Tools: Wrench,
};

export default function Skills() {
	return (
		<section id="skills" className="container py-16 md:py-24">
			<motion.div
				initial={{ opacity: 0, y: 14 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 0.5 }}
				className="max-w-3xl">
				<p className="mb-3 font-medium text-brand-300">Toolkit</p>
				<h2 className="font-display text-3xl md:text-4xl tracking-tight mb-2">
					Skills I use to ship fast and clean
				</h2>
				<p className="text-white/70">
					Frontend polish, solid APIs, and a pragmatic toolchain—organized by depth of experience.
				</p>
			</motion.div>

			<div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
				{Object.entries(SKILLS).map(([group, items], idx) => {
					const Icon = icons[group] || Sparkles;
					return (
						<motion.article
							key={group}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.45, delay: idx * 0.05 }}
							className="glass rounded-2xl p-5 md:p-6">
							<div className="inline-flex items-center gap-2 mb-3">
								<div className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 w-10 h-10">
									<Icon size={18} />
								</div>
								<h3 className="font-display text-lg">{group}</h3>
							</div>

							<div className="flex flex-wrap gap-2">
								{items.map((t) => (
									<span
										key={t}
										className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${gradientFor(
											t
										)}`}>
										{t}
									</span>
								))}
							</div>
						</motion.article>
					);
				})}
			</div>
		</section>
	);
}
