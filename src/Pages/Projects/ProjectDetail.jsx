import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const ProjectDetail = () => {
	const { state } = useLocation();

	const {
		client,
		server,
		title,
		picture,
		liveSite,
		detail1,
		detail2,
		detail3,
		detail4,
		detail5,
		image1,
		image2,
		image3,
		image4,
	} = state.project;

	const images = [picture, image2, image3, image4];
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Autoplay effect
	useEffect(() => {
		const interval = setInterval(() => {
			nextImage();
		}, 3000); // Change the image every 3 seconds

		return () => clearInterval(interval); // Clear interval on component unmount
	}, [currentImageIndex]); // Add currentImageIndex as a dependency

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
		);
	};

	const imageVariants = {
		initial: (direction) => ({
			opacity: 0,
			x: direction > 0 ? 100 : -100,
		}),
		animate: {
			opacity: 1,
			x: 0,
		},
		exit: (direction) => ({
			opacity: 0,
			x: direction < 0 ? 100 : -100,
		}),
	};

	return (
		<div className="px-4 lg:px-0 my-20">
			<motion.h1
				className="text-3xl md:text-5xl text-center my-5 font-extrabold"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				{title}
			</motion.h1>

			<div className="my-10 w-full lg:w-[80%] mx-auto relative overflow-hidden h-[300px] md:h-[400px] lg:h-[650px]">
				<AnimatePresence initial={false} custom={currentImageIndex}>
					<div
						key={currentImageIndex}
						className="absolute inset-0 w-full h-full flex items-center justify-center"
					>
						<motion.img
							src={images[currentImageIndex]}
							alt=""
							custom={currentImageIndex}
							variants={imageVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="w-full h-full rounded-lg border-8 border-purple-500"
						/>
					</div>
				</AnimatePresence>
				<div
					className="absolute inset-y-0 left-0 flex items-center justify-center px-4 cursor-pointer z-10"
					onClick={prevImage}
				>
					<motion.div
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						className="bg-black bg-opacity-50 p-2 rounded-full"
					>
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</motion.div>
				</div>
				<div
					className="absolute inset-y-0 right-0 flex items-center justify-center px-4 cursor-pointer z-10"
					onClick={nextImage}
				>
					<motion.div
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						className="bg-black bg-opacity-50 p-2 rounded-full"
					>
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</motion.div>
				</div>
			</div>

			<div>
				<motion.article
					className="rounded-2xl border border-transparent p-6 lg:p-16 w-full lg:w-[75%] mx-auto my-20 shadow-2xl bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600"
					initial={{ opacity: 0, y: 60, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						duration: 1,
						ease: "easeOut",
					}}
				>
					<h3 className="text-2xl md:text-3xl text-white font-bold text-center mb-6">
						{title} Features
					</h3>

					<ul className="space-y-3">
						{[detail1, detail2, detail3, detail4, detail5].map(
							(detail, index) => (
								<motion.li
									key={index}
									className="block h-full rounded-lg border border-transparent p-5 bg-white bg-opacity-10 hover:bg-opacity-20 hover:shadow-lg transform-gpu transition-all duration-300"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.2 * index, duration: 0.6 }}
								>
									<p className="text-md md:text-lg font-semibold text-white">
										{detail}
									</p>
								</motion.li>
							),
						)}
					</ul>

					<div className="flex flex-col items-center md:flex-row gap-6 md:gap-12 mt-12">
						<a href={client} target="_blank" rel="noopener noreferrer">
							<motion.button
								className="flex items-center px-5 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-600 rounded-full hover:bg-teal-800 focus:outline-none focus:ring focus:ring-teal-400 focus:ring-opacity-70 shadow-lg"
								whileHover={{ rotate: 3 }}
								whileTap={{ rotate: -3 }}
							>
								<AiFillGithub />
								<span className="ml-2">Client Code</span>
							</motion.button>
						</a>

						{server && (
							<a href={server} target="_blank" rel="noopener noreferrer">
								<motion.button
									className="flex items-center px-5 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-full hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-70 shadow-lg"
									whileHover={{ rotate: 3 }}
									whileTap={{ rotate: -3 }}
								>
									<AiFillGithub />
									<span className="ml-2">Server Code</span>
								</motion.button>
							</a>
						)}

						<a href={liveSite} target="_blank" rel="noopener noreferrer">
							<motion.button
								className="flex items-center px-5 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-full hover:bg-purple-800 focus:outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-70 shadow-lg"
								whileHover={{ rotate: 3 }}
								whileTap={{ rotate: -3 }}
							>
								<BiLinkExternal />
								<span className="ml-2">Live Site</span>
							</motion.button>
						</a>
					</div>
				</motion.article>
			</div>
		</div>
	);
};

export default ProjectDetail;
