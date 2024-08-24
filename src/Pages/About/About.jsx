import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import myPic from "../../assets/sajid-bg.png";

const About = () => {
	const [scale, setScale] = useState(0.8); // Start with a smaller scale
	const imageRef = useRef();

	const handleScroll = () => {
		if (imageRef.current) {
			const rect = imageRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const scrollPosition = window.scrollY;

			// Calculate how much the image is in view
			const imageTop = rect.top + scrollPosition;
			const imageHeight = rect.height;
			const percentageInView = Math.min(
				1,
				Math.max(0, (windowHeight - rect.top) / (windowHeight + imageHeight)),
			);

			// Scale from 0.8 to 1 based on how much the image is in view
			setScale(0.8 + percentageInView * 0.2);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const containerVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
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

	const buttonVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
		},
	};

	return (
		<section
			id="about"
			className="py-16 lg:py-24 bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col justify-center items-center h-screen"
		>
			<motion.h1
				className="text-center font-extrabold text-5xl lg:text-7xl text-white mb-12 lg:mb-16"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
			>
				About Me
			</motion.h1>

			<motion.div
				className="flex flex-col lg:flex-row justify-center items-center w-[90%] max-w-5xl mx-auto gap-12 lg:gap-20"
				variants={containerVariant}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					className="w-full lg:w-[55%] text-center lg:text-left"
					variants={textVariant}
				>
					<p className="text-xl lg:text-2xl leading-relaxed text-gray-300">
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
						. I thrive on innovation, continuously exploring new libraries and
						frameworks to enhance user experiences.
					</p>
					<motion.a
						href="https://www.linkedin.com/in/sajjad-abdullah-854661323/"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-8 inline-block text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 px-8 py-4 transition-colors duration-300"
						variants={buttonVariant}
					>
						Let's Connect on LinkedIn
					</motion.a>
				</motion.div>

				<div
					ref={imageRef}
					className="w-[70%] lg:w-[35%] transform transition-transform duration-500"
					style={{ transform: `scale(${scale})` }}
				>
					<img
						src={myPic}
						alt="Sajjad Abdullah"
						className="rounded-full shadow-2xl border-4 border-gray-700"
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
