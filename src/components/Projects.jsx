import ProjectCard from "./ProjectCard";
import Section from "./Section";

const projects = [
	{
		title: "FoundIt - Lost and Found Management System",
		description:
			"Platform for reporting, searching, and claiming lost/found items with role-based features, admin tools, and advanced search.",
		tech: [
			"HTML",
			"CSS",
			"Tailwind",
			"React.js",
			"Next.js",
			"Material UI",
			"TypeScript",
			"Postgres SQL",
			"Prisma",
			"Express.js",
			"JWT",
			"Redux Toolkit",
			"Axios",
			"Zod",
			"React Hook Form",
		],
		repo: "https://github.com/YOUR_CLIENT_REPO", // replace
		demo: "https://foundit-demo-link.com", // replace
	},
	{
		title: "Laptop City - Reseller Website",
		description:
			"Role-based dashboards for buyers/sellers with JWT authentication, product management, and ad placement for sellers.",
		tech: ["HTML", "CSS", "Tailwind", "React.js", "MongoDB", "Firebase Auth", "Express.js", "JWT"],
		repo: "https://github.com/YOUR_CLIENT_REPO", // replace
		demo: "https://laptopcity-demo-link.com", // replace
	},
	{
		title: "Nikah Photography - Personal Service App",
		description:
			"Service listing and reviews app with login-protected features and database-backed storage for services/reviews.",
		tech: ["HTML", "CSS", "Tailwind", "React", "Firebase Auth", "MongoDB", "Express.js", "JWT"],
		repo: "https://github.com/YOUR_CLIENT_REPO", // replace
		demo: "https://nikahphotography-demo-link.com", // replace
	},
];

export default function Projects() {
	return (
		<Section
			id="projects"
			eyebrow="Featured work"
			title="Projects"
			kicker="A few things I’ve designed and built recently.">
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
				{projects.map((p) => (
					<ProjectCard key={p.title} project={p} />
				))}
			</div>
		</Section>
	);
}
