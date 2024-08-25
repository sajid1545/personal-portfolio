import { motion } from "framer-motion";
import React from "react";

const TechnologyCard = ({ tech }) => {
	return (
		<div className="mt-10 mb-10">
			<div className="group relative block cursor-pointer mx-auto tech-card max-w-[150px]">
				<motion.img
					alt={tech.title}
					src={tech.picture}
					className="h-full w-full object-cover opacity-75 transition-opacity duration-300 group-hover:opacity-50"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				/>
				<motion.div
					className="absolute inset-0 flex items-center justify-center"
					initial={{ opacity: 0, y: 20 }}
					whileHover={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
				>
					<motion.div
						className="opacity-0 group-hover:opacity-100"
						initial={{ opacity: 0 }}
						whileHover={{ opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
					>
						<p className="text-xl font-bold text-white text-center">
							{tech.title}
						</p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default TechnologyCard;
