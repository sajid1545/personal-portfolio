import { motion } from "framer-motion";
import React from "react";
import TechnologyCard from "./TechnologyCard";

import css from "../../assets/icons/css3.png";
import express from "../../assets/icons/express.png";
import html from "../../assets/icons/html.png";
import javaScript from "../../assets/icons/javascript.png";
import mongoDB from "../../assets/icons/mongodb.png";
import react from "../../assets/icons/react.png";
import tailwind from "../../assets/icons/tailwind.png";

const Technologies = () => {
	const techs = [
		{
			id: "1",
			title: "HTML",
			picture: html,
		},
		{
			id: "2",
			title: "CSS",
			picture: css,
		},
		{
			id: "3",
			title: "Tailwind CSS",
			picture: tailwind,
		},
		{
			id: "4",
			title: "REACT",
			picture: react,
		},
		{
			id: "5",
			title: "JAVASCRIPT",
			picture: javaScript,
		},
		{
			id: "6",
			title: "MONGODB",
			picture: mongoDB,
		},
		{
			id: "7",
			title: "EXPRESS.js",
			picture: express,
		},
	];

	return (
		<div className="my-20">
			<motion.h1
				className="text-center my-10 font-extrabold text-5xl underline underline-offset-8 decoration-[rgb(206,95,248)]"
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				My Skills
			</motion.h1>

			<div className="overflow-hidden">
				<motion.div
					className="flex justify-center items-center gap-12 flex-wrap"
					initial={{ x: "0%" }} // Start from the middle of the screen
					animate={{ x: ["0%", "-100%"] }} // Move leftwards across the screen
					transition={{
						duration: 30, // Duration for the entire movement
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				>
					{techs.map((tech) => (
						<motion.div
							key={tech.id}
							initial={{ opacity: 0, y: 50, scale: 0.9 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.7,
								type: "spring",
								stiffness: 100,
								delay: 0.1 * tech.id,
							}}
							className="p-4 rounded-lg shadow-lg hover:shadow-xl "
						>
							<TechnologyCard tech={tech} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Technologies;
