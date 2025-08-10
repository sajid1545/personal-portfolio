import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Copy, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CtaBanner() {
	const email = "sajjadabdullah9962@gmail.com";
	const phone = "+880 1745-XXXXXX"; // ← replace with your real number
	const [copied, setCopied] = useState(null);
	const [pos, setPos] = useState({ x: "50%", y: "50%" });

	const handleMouseMove = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		const x = ((e.clientX - r.left) / r.width) * 100;
		const y = ((e.clientY - r.top) / r.height) * 100;
		setPos({ x: `${x}%`, y: `${y}%` });
	};

	const copy = async (text, type) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(type);
			setTimeout(() => setCopied(null), 1100);
		} catch {}
	};

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.35 }}
			transition={{ duration: 0.6 }}
			className="relative rounded-3xl overflow-hidden">
			{/* Subtle animated border */}
			<div className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-r from-brand-500/40 via-fuchsia-500/30 to-cyan-400/40" />

			{/* Cursor-follow spotlight */}
			<motion.div
				className="pointer-events-none absolute -inset-24 rounded-[3rem] opacity-40"
				style={{
					background: `radial-gradient(40rem 28rem at ${pos.x} ${pos.y}, rgba(59,130,246,0.18), transparent 60%)`,
				}}
			/>

			{/* Content card */}
			<div className="relative glass rounded-[calc(1.5rem-1px)] p-6 md:p-8">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
					<div className="max-w-2xl">
						<p className="mb-2 font-medium text-brand-300">Let’s build</p>
						<h3 className="font-display text-2xl md:text-3xl tracking-tight">
							Have a role or project in mind?
						</h3>
						<p className="text-white/70 mt-2">
							I’m open to full-time roles and select freelance work. I ship fast, collaborate well,
							and keep quality high.
						</p>
					</div>

					{/* Primary actions */}
					<div className="flex flex-wrap gap-3">
						<Link
							to="/contact"
							className="px-5 py-3 rounded-full bg-brand-500 hover:bg-brand-400 transition-colors shadow-soft">
							Contact me
						</Link>
						<a
							href={`mailto:${email}`}
							className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 inline-flex items-center gap-2">
							<Mail size={16} /> Email
						</a>
					</div>
				</div>

				{/* Quick contact row (mirrors Contact card) */}
				<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
					{/* Email */}
					<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
						<div className="flex items-center gap-3">
							<Mail size={18} className="text-brand-300" />
							<div>
								<p className="text-sm text-white/60">Email</p>
								<p className="text-white font-medium">{email}</p>
							</div>
						</div>
						<button
							onClick={() => copy(email, "email")}
							className="p-2 rounded-md hover:bg-white/10 transition-colors"
							title="Copy email">
							{copied === "email" ? (
								<CheckCircle2 size={18} className="text-green-400" />
							) : (
								<Copy size={18} className="text-white/60" />
							)}
						</button>
					</div>

					{/* Phone */}
					<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
						<div className="flex items-center gap-3">
							<Phone size={18} className="text-brand-300" />
							<div>
								<p className="text-sm text-white/60">Phone</p>
								<p className="text-white font-medium">{phone}</p>
							</div>
						</div>
						<button
							onClick={() => copy(phone, "phone")}
							className="p-2 rounded-md hover:bg-white/10 transition-colors"
							title="Copy phone">
							{copied === "phone" ? (
								<CheckCircle2 size={18} className="text-green-400" />
							) : (
								<Copy size={18} className="text-white/60" />
							)}
						</button>
					</div>

					{/* Socials */}
					<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
						<div className="flex items-center gap-3">
							<Linkedin size={18} className="text-brand-300" />
							<div>
								<p className="text-sm text-white/60">Social</p>
								<p className="text-white font-medium">LinkedIn / GitHub</p>
							</div>
						</div>
						<div className="flex gap-2">
							<a
								href="https://linkedin.com/in/sajjad-abdullah-9962"
								target="_blank"
								rel="noreferrer"
								className="chip"
								title="LinkedIn">
								<Linkedin size={16} />
								LinkedIn
							</a>
							<a
								href="https://github.com/sajid1545"
								target="_blank"
								rel="noreferrer"
								className="chip"
								title="GitHub">
								<Github size={16} />
								GitHub
							</a>
						</div>
					</div>
				</div>

				{/* Tiny toast */}
				<AnimatePresence>
					{copied && (
						<motion.div
							initial={{ opacity: 0, y: 6 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 6 }}
							transition={{ duration: 0.2 }}
							className="absolute bottom-3 left-1/2 -translate-x-1/2">
							<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-sm">
								<CheckCircle2 size={16} className="text-brand-300" />
								{copied === "email" ? "Email copied" : "Phone copied"}
							</span>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}
