import { motion } from "framer-motion";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
	const { _id, title, picture, description } = project;

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.5,
				ease: "easeInOut",
			}}
			className="rounded-2xl shadow-lg p-1 lg:w-[600px] w-full my-10"
		>
			<div className="block mx-auto rounded-xl p-6 sm:p-8 cursor-pointer transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(206,95,248,_0.5)] hover:shadow-[0_10px_20px_rgba(206,95,248,_0.9)]">
				<img
					alt="Art"
					src={picture}
					className="rounded-lg w-full object-cover h-64 lg:h-72 transition-transform duration-300 ease-in-out "
				/>
				<div className="mt-5 text-center">
					<motion.h3
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.2,
							duration: 0.6,
							type: "spring",
							stiffness: 120,
						}}
						className="text-2xl lg:text-3xl font-extrabold my-3"
					>
						{title}
					</motion.h3>

					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.4,
							duration: 0.6,
							type: "spring",
							stiffness: 120,
						}}
						className="mt-2 text-md text-gray-700"
					>
						{description}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.5 }}
					>
						<Link state={{ project: project }} to={`/project/${_id}`}>
							<button
								type="button"
								className="flex items-center justify-center px-8 py-3 mx-auto my-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg shadow-[0_0_15px_rgba(206,95,248,_0.5)] hover:shadow-[0_10px_20px_rgba(206,95,248,_0.9)] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
							>
								More Details
								<AiOutlineArrowRight className="w-5 h-6 ml-2" />
							</button>
						</Link>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
