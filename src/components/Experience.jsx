import Section from "./Section";

const roles = [
	{
		company: "Zentexx",
		title: "Full Stack Developer",
		period: "June 2024 – Present",
		bullets: [
			"Built responsive UIs with React.js, Tailwind CSS, HTML5, and CSS3.",
			"Developed secure APIs with Express.js, integrated MongoDB with Mongoose.",
			"Worked across full stack ensuring seamless integration and high performance.",
		],
	},
	{
		company: "Ekopii",
		title: "Associate Software Engineer",
		period: "Jan 2023 – Nov 2023",
		bullets: [
			"Developed frontend with React.js and backend with Node.js/Express.js.",
			"Integrated frontend and backend using REST APIs.",
			"Managed MongoDB databases for data storage and retrieval.",
		],
	},
];

export default function Experience() {
	return (
		<Section id="experience" eyebrow="Background" title="Experience">
			<ul className="space-y-4">
				{roles.map((r) => (
					<li key={r.company} className="glass rounded-2xl p-6">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
							<div>
								<h3 className="font-display text-xl">
									{r.title} • {r.company}
								</h3>
								<p className="text-white/60">{r.period}</p>
							</div>
						</div>
						<ul className="mt-4 list-disc list-inside text-white/80 space-y-1">
							{r.bullets.map((b, i) => (
								<li key={i}>{b}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</Section>
	);
}
