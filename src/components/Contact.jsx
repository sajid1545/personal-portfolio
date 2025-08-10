import { Mail } from "lucide-react";
import Section from "./Section";

export default function Contact() {
	return (
		<Section id="contact" eyebrow="Say hello" title="Let’s build something together.">
			<div className="glass rounded-2xl p-6 md:p-8">
				<p className="text-white/80">
					I’m open to interesting roles and freelance work. If you have a project in mind or just
					want to connect, drop a line.
				</p>
				<div className="mt-6">
					<a href="mailto:sajjadabdullah9962@gmail.com" className="chip">
						<Mail size={16} />
						Email me
					</a>
				</div>
			</div>
		</Section>
	);
}
