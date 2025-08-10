import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(42,118,255,0.10),transparent_70%)]" />
			<div className="container pt-16 md:pt-24 pb-12">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="font-display text-4xl md:text-6xl tracking-tight">
					Building slick, scalable web apps.
				</motion.h1>

				<p className="mt-5 text-white/70 max-w-2xl">
					Associate Software Engineer focused on React, Tailwind, and modern JS tooling. I love
					crafting fast, accessible UIs with attention to detail.
				</p>

				<div className="mt-8 flex flex-wrap gap-3">
					<Link
						to="/projects"
						className="px-5 py-3 rounded-full bg-brand-500 hover:bg-brand-400 transition-colors shadow-soft">
						View Projects
					</Link>
					<Link
						to="/contact"
						className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10">
						Get in touch
					</Link>
				</div>
			</div>
		</div>
	);
}
