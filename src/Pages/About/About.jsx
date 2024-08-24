import { motion } from "framer-motion";
import React from "react";
import myPic from "../../assets/sajid-bg.png";

const About = () => {
	// Animation Variants
	const containerVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const textVariant = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const imageVariant = {
		hidden: { opacity: 0, scale: 0.8, rotate: -10 },
		visible: {
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: { duration: 1, ease: "easeOut" },
		},
	};

	const buttonVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
		},
	};

	return (
		<section
			id="about"
			className="my-10 h-screen flex flex-col justify-center items-center "
		>
			<motion.h1
				className="text-center my-10 font-extrabold text-5xl lg:text-6xl text-white underline underline-offset-8 decoration-[rgb(206,95,248)]"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
			>
				About Me
			</motion.h1>

			<motion.div
				className="flex justify-center flex-col-reverse lg:flex-row items-center w-[95%] gap-10 mx-auto"
				variants={containerVariant}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					className="my-info w-full lg:w-[65%] text-center lg:text-left"
					variants={textVariant}
				>
					<p className="text-3xl lg:text-4xl mb-10 leading-relaxed text-gray-700">
						Hello, I'm{" "}
						<span className="font-extrabold text-[#CE5FF8]">
							Sajjad Abdullah
						</span>{" "}
						from the vibrant city of{" "}
						<span className="font-extrabold text-[#CE5FF8]">
							Chittagong, Bangladesh
						</span>
						. I'm a tech enthusiast currently pursuing a BSc in Information
						Technology, and my passion lies in crafting modern web experiences.
						I specialize in building interactive web applications using{" "}
						<span className="font-semibold text-purple-600">
							JavaScript, React.js, and Express.js
						</span>
						, among other exciting tools. I thrive on innovation, continuously
						exploring new libraries and frameworks to enhance user experiences.
					</p>
					<motion.a
						href="https://www.linkedin.com/in/sajjad-abdullah-854661323/"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 px-6 py-3 inline-block text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
						variants={buttonVariant}
					>
						Let's Connect on LinkedIn
					</motion.a>
				</motion.div>

				<motion.div
					className="my-pic w-[50%] lg:w-[30%] mb-10 lg:mb-0"
					variants={imageVariant}
				>
					<img
						src={myPic}
						alt="Sajjad Abdullah"
						className="rounded-full shadow-lg border-4 border-gray-300"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;
