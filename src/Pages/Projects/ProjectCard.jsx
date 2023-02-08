import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
	const { _id, title, picture, description } = project;

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				default: {
					duration: 0.3,
					ease: [0, 0.71, 0.2, 1.01],
				},
				scale: {
					type: 'spring',
					damping: 5,
					stiffness: 100,
					restDelta: 0.001,
				},
			}}
			className="rounded-2xl lg:h-[620px]  shadow-[0_10px_20px_rgba(206,95,248,_0.7)]  p-1  lg:w-[600px] my-10">
			<div className="block mx-auto rounded-xl  p-6  sm:p-8 cursor-pointer ">
				<img alt="Art" src={picture} className="  rounded-lg" />
				<div className="mt-5">
					<h3 className="text-3xl font-extrabold text-center my-3">{title}</h3>

					<p className="mt-2 text-md text-center ">{description}</p>

					<div>
						<Link to={`/project/${_id}`}>
							<button className="items-center px-20 py-3  mx-auto my-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 flex gap-2">
								More Details
								<AiOutlineArrowRight className="w-5 h-6 " />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
