import { motion } from "framer-motion";
import { CheckCircle2, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Section from "./Section";

export default function Contact() {
	const email = "sajjadabdullah9962@gmail.com";
	const phone = "+880 1745-XXXXXX"; // Replace with your actual number

	const [copied, setCopied] = useState(null);

	const handleCopy = async (text, type) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(type);
			setTimeout(() => setCopied(null), 1200);
		} catch {}
	};

	return (
		<Section id="contact" eyebrow="Say hello" title="Let’s build something together.">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6 }}
				className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
				{/* Background accent */}
				<div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-to-br from-brand-500 to-fuchsia-500" />

				<p className="text-white/80 max-w-2xl relative">
					I’m open to exciting roles and select freelance collaborations. If you have a project in
					mind or just want to connect, feel free to reach out through any of these channels.
				</p>

				<div className="mt-6 space-y-4 relative">
					{/* Email */}
					<ContactItem
						icon={<Mail size={18} />}
						label="Email"
						value={email}
						onCopy={() => handleCopy(email, "email")}
						copied={copied === "email"}
					/>

					{/* Phone */}
					<ContactItem
						icon={<Phone size={18} />}
						label="Phone"
						value={phone}
						onCopy={() => handleCopy(phone, "phone")}
						copied={copied === "phone"}
					/>

					{/* Location */}
					<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
						<MapPin size={18} className="text-brand-300" />
						<div>
							<p className="text-sm text-white/60">Location</p>
							<p className="text-white font-medium">Chittagong, Bangladesh</p>
						</div>
					</div>

					{/* Social links */}
					<div className="flex gap-3 pt-2">
						<a
							href="https://linkedin.com/in/sajjad-abdullah-9962"
							target="_blank"
							rel="noreferrer"
							className="chip">
							<Linkedin size={16} /> LinkedIn
						</a>
						<a
							href="https://github.com/sajid1545"
							target="_blank"
							rel="noreferrer"
							className="chip">
							<Github size={16} /> GitHub
						</a>
					</div>
				</div>
			</motion.div>
		</Section>
	);
}

function ContactItem({ icon, label, value, onCopy, copied }) {
	return (
		<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
			<div className="flex items-center gap-3">
				<span className="text-brand-300">{icon}</span>
				<div>
					<p className="text-sm text-white/60">{label}</p>
					<p className="text-white font-medium">{value}</p>
				</div>
			</div>
			<button
				onClick={onCopy}
				className="p-2 rounded-md hover:bg-white/10 transition-colors"
				title="Copy to clipboard">
				{copied ? (
					<CheckCircle2 size={18} className="text-green-400" />
				) : (
					<Copy size={18} className="text-white/60" />
				)}
			</button>
		</div>
	);
}
