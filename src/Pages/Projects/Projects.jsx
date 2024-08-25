import { motion } from "framer-motion";
import React from "react";
import { projects } from "../../../public/projectDataArray";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	const containerVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const projectVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
			},
		},
	};

	return (
		<div>
			<div className="text-center font-extrabold space-y-5 mt-40 mb-10">
				<h1 className="text-5xl underline underline-offset-8 decoration-[#CE5FF8]">
					My recent Projects
				</h1>
				<p className="text-2xl">
					Here are few projects I've worked on recently
				</p>
			</div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center"
			>
				{projects.map((project) => (
					<motion.div key={project._id} variants={projectVariants}>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Projects;
