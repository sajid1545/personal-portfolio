import { motion } from "framer-motion";
import React from "react";
import { BsDownload } from "react-icons/bs";
import "./banner.css";

const Banner = () => {
	const handleDownload = () => {
		fetch("/fullStack.pdf").then((response) => {
			response.blob().then((blob) => {
				const fileURL = window.URL.createObjectURL(blob);
				const alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "Sajjad Abdullah Full Stack Developer.pdf";
				alink.click();
			});
		});
	};

	return (
		<div className="flex h-screen justify-center items-center flex-col mb-10 px-4">
			<motion.h1
				className="my-name font-extrabold text-4xl md:text-5xl lg:text-7xl xl:text-8xl mb-4 md:mb-6 lg:mb-10 text-center"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1,
					ease: "easeOut",
					type: "spring",
					stiffness: 100,
				}}
				whileHover={{ textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
			>
				Sajjad Abdullah
			</motion.h1>
			<motion.h3
				className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1,
					delay: 0.5,
					ease: "easeOut",
					type: "spring",
					stiffness: 100,
				}}
				whileHover={{ textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
			>
				Web Developer
			</motion.h3>
			<motion.div
				className="flex flex-col md:flex-row items-center justify-center gap-5 mt-6"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
			>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://drive.google.com/file/d/1fEhoSoyCvkzLfE24dzsBhJVvrI9Rh7tT/view?usp=sharing"
				>
					<motion.button
						className="glow-on-hover bg-gradient-to-r from-purple-600 to-blue-600 mt-5 md:mt-10 px-10 md:px-14 py-3 md:py-4 font-extrabold text-lg md:text-xl text-white rounded-lg shadow-lg"
						type="button"
						whileHover={{
							boxShadow: "0px 0px 16px rgba(255, 255, 255, 0.9)",
						}}
						transition={{ duration: 0.3 }}
					>
						See My Resume
					</motion.button>
				</a>

				<motion.button
					type="button"
					onClick={handleDownload}
					className="glow-on-hover bg-gradient-to-r from-pink-500 to-red-500 mt-5 md:mt-10 px-8 md:px-10 py-3 md:py-4 font-extrabold text-lg md:text-xl text-white flex items-center rounded-lg shadow-lg"
					whileHover={{
						boxShadow: "0px 0px 16px rgba(255, 255, 255, 0.9)",
					}}
					transition={{ duration: 0.3 }}
				>
					<BsDownload className="h-5 w-5 md:h-6 md:w-6 mr-2" />
					Download Resume
				</motion.button>
			</motion.div>
		</div>
	);
};

export default Banner;
