const tech = ["React", "TypeScript", "Tailwind", "Vite", "Node", "Express", "MongoDB", "Firebase"];

export default function Skills() {
	return (
		<div id="skills" className="container py-12">
			<div className="flex flex-wrap gap-3">
				{tech.map((t) => (
					<span key={t} className="chip">
						{t}
					</span>
				))}
			</div>
		</div>
	);
}
