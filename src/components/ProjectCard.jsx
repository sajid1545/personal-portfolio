import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5 }}
			className="glass rounded-2xl p-5 md:p-6 hover:translate-y-[-2px] transition-transform">
			{/* Placeholder cover (replace with <img src=... /> if you have screenshots) */}
			<div className="aspect-video rounded-xl bg-gradient-to-br from-brand-800/50 to-brand-900/30 mb-4 border border-white/5" />

			<h3 className="font-display text-xl">{project.title}</h3>
			<p className="text-white/70 mt-2">{project.description}</p>

			<div className="mt-4 flex flex-wrap items-center gap-2">
				{project.tech.map((t) => (
					<span key={t} className="chip">
						{t}
					</span>
				))}
			</div>

			<div className="mt-5 flex gap-3">
				{project.repo && (
					<a className="chip" href={project.repo} target="_blank" rel="noreferrer">
						<Github size={16} />
						Code
					</a>
				)}
				{project.demo && (
					<a className="chip" href={project.demo} target="_blank" rel="noreferrer">
						Live <ArrowUpRight size={16} />
					</a>
				)}
			</div>
		</motion.article>
	);
}
