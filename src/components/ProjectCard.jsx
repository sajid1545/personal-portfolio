import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

const skillGradients = {
	"React.js": "from-cyan-500 to-blue-500",
	React: "from-cyan-500 to-blue-500",
	Tailwind: "from-sky-400 to-indigo-500",
	"Tailwind CSS": "from-sky-400 to-indigo-500",
	TypeScript: "from-blue-400 to-indigo-600",
	JavaScript: "from-yellow-400 to-orange-500",
	"Next.js": "from-gray-700 to-gray-900",
	MongoDB: "from-green-400 to-emerald-600",
	"Postgres SQL": "from-sky-400 to-indigo-500",
	Prisma: "from-purple-400 to-indigo-500",
	"Express.js": "from-yellow-500 to-orange-600",
	Firebase: "from-yellow-400 to-orange-500",
	Redux: "from-purple-500 to-pink-500",
	"Material UI": "from-blue-500 to-indigo-500",
	Stripe: "from-indigo-500 to-purple-500",
	JWT: "from-orange-400 to-red-500",
};

export default function ProjectCard({ project }) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5 }}
			className="glass rounded-2xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-300">
			{/* Cover */}
			<div className="aspect-video rounded-xl overflow-hidden border border-white/5 mb-4">
				{project.image ? (
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
					/>
				) : (
					<div className="w-full h-full bg-gradient-to-br from-brand-800/50 to-brand-900/30" />
				)}
			</div>

			{/* Title */}
			<h3 className="font-display text-xl mb-2">{project.title}</h3>
			<p className="text-white/70 leading-relaxed mb-4">{project.description}</p>

			{/* Tech chips */}
			<div className="flex flex-wrap gap-2 mb-5">
				{project.tech?.map((t) => {
					const gradient = skillGradients[t] || "from-pink-500 to-rose-500";
					return (
						<span
							key={t}
							className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${gradient}`}>
							{t}
						</span>
					);
				})}
			</div>

			{/* Repo + Live Links */}
			<div className="flex flex-wrap gap-2 mt-4">
				{project.frontend && (
					<a
						href={project.frontend}
						target="_blank"
						rel="noreferrer"
						className="chip hover:bg-white/15 transition-colors">
						<Github size={16} /> Frontend
					</a>
				)}
				{project.backend && (
					<a
						href={project.backend}
						target="_blank"
						rel="noreferrer"
						className="chip hover:bg-white/15 transition-colors">
						<Github size={16} /> Backend
					</a>
				)}
				{project.live && (
					<a
						href={project.live}
						target="_blank"
						rel="noreferrer"
						className="chip hover:bg-white/15 transition-colors">
						<Globe size={16} /> Live
					</a>
				)}
			</div>
		</motion.article>
	);
}
