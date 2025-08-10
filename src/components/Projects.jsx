import ProjectCard from "./ProjectCard";
import Section from "./Section";

import assets from "../assets/index";

export const projects = [
	{
		_id: "1",
		title: "FoundIt (Lost & Found Management)",
		description:
			"FoundIt helps users report, search, and claim lost or found items. Features role-based dashboards, advanced search, admin management, and secure API integration.",
		image: "https://i.ibb.co.com/zhNmntNS/Screenshot-1.png", // replace with real cover
		images: [
			"https://i.ibb.co/your1.png", // replace with real images
			"https://i.ibb.co/your2.png",
			"https://i.ibb.co/your3.png",
		],
		tech: [
			"HTML",
			"CSS",
			"Tailwind CSS",
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
		frontend: "https://github.com/sajid1545/FoundIt-client",
		backend: "https://github.com/sajid1545/FoundIt-server",
		live: "https://assignment-9-client.vercel.app/",
	},
	{
		_id: "2",
		title: "Laptop City",
		description:
			"Laptop City is a resale platform for refurbished laptops. Built with the MERN stack, it offers role-based dashboards for buyers/sellers, secure Stripe payments, and admin management features.",
		image: "https://i.ibb.co/5R4PYgk/Laptop-city.jpg",
		images: [
			assets.projects.laptopCity.laptopCity1,
			assets.projects.laptopCity.laptopCity2,
			assets.projects.laptopCity.laptopCity3,
			assets.projects.laptopCity.laptopCity4,
			assets.projects.laptopCity.laptopCity5,
			assets.projects.laptopCity.laptopCity6,
			assets.projects.laptopCity.laptopCity7,
		],
		tech: [
			"HTML",
			"CSS",
			"Tailwind CSS",
			"React.js",
			"Express.js",
			"MongoDB",
			"Firebase",
			"Stripe",
			"JWT",
		],
		frontend: "https://github.com/sajid1545/laptop-city-cllient",
		backend: "https://github.com/sajid1545/laptop-city-server",
		live: "https://whimsical-pavlova-5e8a87.netlify.app/",
	},
	{
		_id: "3",
		title: "Nikah Photography",
		description:
			"Nikah Photography is a wedding photography services app. Users can browse services, add reviews, and manage their own listings, with Firebase authentication and secure data storage in MongoDB.",
		image: "https://i.ibb.co/DkC0Q04/Nikah-photography.jpg",
		images: [
			"https://i.ibb.co/JpG8nL1/4.jpg",
			"https://i.ibb.co/G5zv55x/1.jpg",
			"https://i.ibb.co/f12g860/3.png",
			"https://i.ibb.co/KNbHfJx/2.jpg",
		],
		tech: ["HTML", "CSS", "Tailwind CSS", "React.js", "Express.js", "MongoDB", "Firebase", "JWT"],
		frontend: "https://github.com/sajid1545/Nikah-photography_client",
		backend: "https://github.com/sajid1545/Nikah-photography_server",
		live: "https://assignment-11-cf2b9.web.app/",
	},
	{
		_id: "4",
		title: "Epic Coding",
		description:
			"Epic Coding is an online coding education platform offering detailed courses with instructor info and ratings. Built with the MERN stack and Firebase authentication.",
		image: "https://i.ibb.co/2y9Kjp1/Epic-coding.jpg",
		images: [
			"https://i.ibb.co/VWmcNg6/1.jpg",
			"https://i.ibb.co/NWVJdDQ/2.png",
			"https://i.ibb.co/QK6kYwh/3.png",
			"https://i.ibb.co/DC3C9X9/4.jpg",
		],
		tech: ["HTML", "CSS", "Tailwind CSS", "React.js", "Express.js", "MongoDB", "Firebase", "JWT"],
		frontend: "https://github.com/sajid1545/epic-coding_client",
		backend: "https://github.com/sajid1545/epic-coding_server",
		live: "https://assignment-10-epic-coding.web.app/",
	},
	{
		_id: "5",
		title: "Donation - X",
		description:
			"Donation - X is a platform for hosting and managing charity events. Users can browse events, donate, and admins can manage event details.",
		image: "https://i.ibb.co/ZgSnGdx/title.png",
		images: [
			"https://i.ibb.co/F7C9tPf/1.png",
			"https://i.ibb.co/9TyyKxH/2.png",
			"https://i.ibb.co/zhCG32v/3.png",
			"https://i.ibb.co/8bpjVfW/4.png",
		],
		tech: ["HTML", "CSS", "Tailwind CSS", "React.js", "Express.js", "MongoDB", "Firebase"],
		frontend: "https://github.com/sajid1545/Donation---X",
		backend: "", // If you have a separate server repo, add it here
		live: "https://donation-x-3ea9c.firebaseapp.com/",
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
