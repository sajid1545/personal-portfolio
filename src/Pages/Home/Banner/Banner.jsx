import { motion } from "framer-motion";
import React from "react";
import { BsDownload } from "react-icons/bs";
import "./banner.css";

const Banner = () => {
	const handleDownload = () => {
		fetch("/src/assets/Resume/fullStack.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				const alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "Sajjad Abdullah MERN Stack Developer.pdf";
				alink.click();
			});
		});
	};

	return (
		<div className="flex h-screen justify-center items-center flex-col mb-10">
			<motion.h1
				className="my-name font-extrabold text-5xl lg:text-8xl mb-10"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				Sajjad Abdullah
			</motion.h1>
			<motion.h3
				className="text-3xl lg:text-5xl font-extrabold"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				Web Developer
			</motion.h3>
			<motion.div
				className="flex items-center justify-center gap-5"
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
						className="glow-on-hover bg-[#191328] mt-10 px-14 py-4 font-extrabold text-xl"
						type="button"
						whileHover={{
							scale: 1.1,
							boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
						}}
						transition={{ duration: 0.3 }}
					>
						See My Resume
					</motion.button>
				</a>

				<motion.button
					type="button"
					onClick={handleDownload}
					className="glow-on-hover bg-[#191328] mt-10 px-4 py-4 font-extrabold text-xl flex"
					whileHover={{
						scale: 1.1,
						boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
					}}
					transition={{ duration: 0.3 }}
				>
					<BsDownload className="h-7 w-7" />
				</motion.button>
			</motion.div>
		</div>
	);
};

export default Banner;
