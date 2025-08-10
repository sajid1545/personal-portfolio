import { motion } from "framer-motion";
import { ArrowRight, Camera, Laptop, SearchCheck } from "lucide-react";
import { Link } from "react-router-dom";

import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Landing() {
	return (
		<div className="relative">
			<GradientBackdrop />

			{/* HERO */}
			<section className="relative container pt-20 md:pt-28 pb-8">
				<motion.h1
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="font-display text-4xl md:text-6xl tracking-tight">
					Full-stack developer delivering <span className="text-brand-300">scalable</span> solutions
					and <span className="text-brand-300">user-focused</span> experiences.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.08 }}
					className="mt-5 text-white/75 max-w-2xl">
					At Zentexx and previously at Ekopii, I’ve built responsive interfaces, engineered secure
					backends, and shipped features that balance performance with polish. My stack spans
					React.js, Tailwind, Node/Express, MongoDB, Postgres/Prisma — and I love turning ideas into
					dependable products.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.16 }}
					className="mt-8 flex flex-wrap gap-3">
					<Link
						to="/projects"
						className="px-5 py-3 rounded-full bg-brand-500 hover:bg-brand-400 transition-colors shadow-soft inline-flex items-center gap-2">
						View projects <ArrowRight size={18} />
					</Link>
					<a
						href="/resume.pdf"
						className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10">
						Download résumé
					</a>
				</motion.div>
			</section>

			{/* SIGNATURE PROJECT CARDS */}
			<section className="container py-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<FeatureCard
						icon={<SearchCheck />}
						title="FoundIt"
						body="A Lost & Found management system with advanced search, role-based dashboards, and admin oversight. Built with Next.js, TypeScript, Prisma/Postgres, and Express."
					/>
					<FeatureCard
						icon={<Laptop />}
						title="Laptop City"
						body="Reseller platform with seller/buyer roles, JWT-secured dashboards, and product advertising logic. Powered by React.js, MongoDB, Firebase Auth, and Express."
					/>
					<FeatureCard
						icon={<Camera />}
						title="Nikah Photography"
						body="A personal service app for event bookings and reviews. Secure login, CRUD services, and review storage with React, MongoDB, Express, and Firebase Auth."
					/>
				</div>
			</section>

			{/* SKILLS STRIP */}
			<section className="container py-6">
				<SectionHeader eyebrow="Toolkit" title="Skills I use daily" />
				<Skills />
			</section>

			{/* PROJECTS */}
			<section className="container py-8">
				<SectionHeader
					eyebrow="Featured work"
					title="Selected projects"
					kicker="A few builds that highlight how I approach product, polish, and performance."
				/>
				<Projects />
			</section>

			{/* CTA BANNER */}
			<section className="container py-16">
				<CtaBanner />
			</section>

			<Contact />
		</div>
	);
}

/* ---------- Local helpers ---------- */
function SectionHeader({ eyebrow, title, kicker }) {
	return (
		<div className="max-w-3xl">
			{eyebrow && <p className="mb-3 font-medium text-brand-300">{eyebrow}</p>}
			{title && <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-2">{title}</h2>}
			{kicker && <p className="text-white/70">{kicker}</p>}
		</div>
	);
}

function FeatureCard({ icon, title, body }) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.45 }}
			className="glass rounded-2xl p-5 md:p-6 h-full">
			<div className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 w-11 h-11">
				{icon}
			</div>
			<h3 className="mt-3 font-display text-lg">{title}</h3>
			<p className="mt-2 text-white/70">{body}</p>
		</motion.article>
	);
}

function CtaBanner() {
	return (
		<div className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
			<div>
				<p className="mb-2 font-medium text-brand-300">Let’s build</p>
				<h3 className="font-display text-2xl md:text-3xl tracking-tight">
					Have a role or project in mind?
				</h3>
				<p className="text-white/70 mt-2">
					I’m open to full-time roles and select freelance work. I can ship fast, iterate with your
					team, and keep quality high.
				</p>
			</div>
			<div className="flex gap-3">
				<Link
					to="/contact"
					className="px-5 py-3 rounded-full bg-brand-500 hover:bg-brand-400 transition-colors shadow-soft">
					Contact me
				</Link>
				<a
					href="mailto:sajjadabdullah9962@gmail.com"
					className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10">
					Email
				</a>
			</div>
		</div>
	);
}

function GradientBackdrop() {
	return (
		<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
			<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(42,118,255,0.10),transparent_70%)]" />
			<div
				className="absolute inset-0 opacity-[0.07] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
				style={{
					backgroundImage:
						"linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>
		</div>
	);
}
