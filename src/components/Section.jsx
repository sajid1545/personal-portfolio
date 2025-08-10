import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, kicker, children }) {
	return (
		<section id={id} className="container py-16 md:py-24">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 0.5 }}
				className="max-w-3xl">
				{eyebrow && <p className="mb-3 font-medium text-brand-300">{eyebrow}</p>}
				{title && (
					<h2 className="font-display text-3xl md:text-4xl tracking-tight mb-2">{title}</h2>
				)}
				{kicker && <p className="text-white/70">{kicker}</p>}
			</motion.div>
			<div className="mt-10">{children}</div>
		</section>
	);
}
