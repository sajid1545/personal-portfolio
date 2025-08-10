import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Handshake, Lightbulb, Sparkles, Wrench } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

/* ====== Resume-based groups ====== */
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

/* ====== Pretty gradients per tech (fallback provided) ====== */
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

const ICONS = { Expertise: Sparkles, Comfortable: Handshake, Familiar: Lightbulb, Tools: Wrench };
const TABS = ["All", ...Object.keys(SKILLS)];

export default function Skills() {
	const [activeTab, setActiveTab] = useState("All");
	const [copied, setCopied] = useState(""); // last-copied skill
	const [showToast, setShowToast] = useState(false);

	const items = useMemo(() => {
		if (activeTab === "All") {
			return Object.values(SKILLS).flat();
		}
		return SKILLS[activeTab] || [];
	}, [activeTab]);

	useEffect(() => {
		if (!copied) return;
		setShowToast(true);
		const t = setTimeout(() => setShowToast(false), 900);
		return () => clearTimeout(t);
	}, [copied]);

	const copySkill = async (t) => {
		try {
			await navigator.clipboard.writeText(t);
			setCopied(t);
		} catch {
			// no-op
		}
	};

	return (
		<section id="skills" className="container py-16 md:py-24">
			{/* Heading */}
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
					Switch tabs to explore by depth. Tap a chip to copy the skill name.
				</p>
			</motion.div>

			{/* Tabs */}
			<div className="mt-6 flex flex-wrap gap-2">
				{TABS.map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
							activeTab === tab
								? "text-brand-300 border-white/15 bg-white/5"
								: "text-white/80 border-white/10 hover:bg-white/5"
						}`}
						aria-pressed={activeTab === tab}>
						{tab}
					</button>
				))}
			</div>

			{/* Grid (animated layout) */}
			<motion.div layout className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
				{(activeTab === "All" ? Object.entries(SKILLS) : [[activeTab, items]]).map(
					([group, groupItems], idx) => {
						const Icon = ICONS[group] || Sparkles;
						return (
							<motion.article
								key={group}
								layout
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

								<motion.div layout className="flex flex-wrap gap-2">
									{groupItems.map((t) => (
										<motion.button
											key={t}
											layout
											onClick={() => copySkill(t)}
											className={`px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${gradientFor(
												t
											)} shadow-sm outline-none focus:ring-2 focus:ring-white/20`}
											whileHover={{ y: -2 }}
											whileTap={{ scale: 0.98 }}
											title="Click to copy">
											{t}
										</motion.button>
									))}
								</motion.div>
							</motion.article>
						);
					}
				)}
			</motion.div>

			{/* Tiny toast */}
			<AnimatePresence>
				{showToast && (
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 8 }}
						className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
						<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-sm">
							<CheckCircle2 size={16} className="text-brand-300" />
							Copied “{copied}”
						</span>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
