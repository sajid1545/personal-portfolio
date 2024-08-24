import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import contactPic from "../../assets/contact-me-2.jpg";
import SmallSpinner from "../Shared/Spinners/SmallSpinner";

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_USER_ID,
			)
			.then(
				(result) => {
					console.log(result.text);
					Swal.fire({
						icon: "success",
						title: "Message sent Successfully",
					});
					setLoading(false);
				},
				(error) => {
					console.log(error.text);
					setLoading(false);
				},
			);

		e.target.reset();
	};

	return (
		<motion.div
			id="contact"
			className="w-[90%] mx-auto my-10"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<motion.h1
				className="text-center my-10 font-extrabold text-5xl underline underline-offset-8 decoration-[#ce5ff8]"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				Contact Me
			</motion.h1>

			<motion.div
				className="shadow-[0_10px_20px_rgba(206,95,248,_0.7)] p-8 flex flex-col lg:flex-row rounded-xl gap-5  my-10"
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				{/* Left side of form */}
				<div>
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
					>
						<h1 className="text-4xl font-extrabold">
							Let’s talk about anything!
						</h1>
						<p className="mt-3">
							Hate forms? Send me an{" "}
							<span className="text-purple-700 font-bold hover:underline underline-offset-8 duration-500">
								<a href="mailto:sajjadabdullah9962@gmail.com">email</a>
							</span>{" "}
							instead.
						</p>
					</motion.div>

					<motion.div
						className="p-10"
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<img
							src={contactPic}
							alt=""
							className="contact-image rounded-3xl h-[600px] w-full p-5 -m-5 "
						/>
					</motion.div>
				</div>

				{/* Right side of form */}
				<motion.div
					className="w-[90%] lg:w-2/4 mx-auto"
					initial={{ x: 50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<h1 className="text-center my-10 font-extrabold text-5xl underline underline-offset-8 decoration-[rgb(206,95,248)]">
						Get In Touch
					</h1>
					<form ref={form} onSubmit={sendEmail}>
						<motion.div
							initial="hidden"
							animate="visible"
							variants={{
								hidden: { opacity: 0, y: 50 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										staggerChildren: 0.2,
									},
								},
							}}
						>
							<motion.div
								variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
							>
								<span className="uppercase text-sm font-bold">Full Name</span>
								<input
									name="user_name"
									className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline focus:outline-offset-4 focus:outline-[#bb44ea] focus:shadow-outline"
									type="text"
								/>
							</motion.div>
							<motion.div
								className="my-5"
								variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
							>
								<span className="uppercase text-sm font-bold">Email</span>
								<input
									name="user_email"
									className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline focus:outline-offset-4 focus:outline-[#bb44ea] focus:shadow-outline"
									type="email"
								/>
							</motion.div>
							<motion.div
								className="mt-8"
								variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
							>
								<span className="uppercase text-sm font-bold">Message</span>
								<textarea
									name="message"
									className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline focus:outline-offset-4 focus:outline-[#bb44ea] focus:shadow-outline"
								/>
							</motion.div>
							<motion.div
								className="mt-8"
								variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
							>
								{loading ? (
									<SmallSpinner />
								) : (
									<motion.button
										whileHover={{
											scale: 1.05,
											boxShadow: "0 0 15px rgba(206,95,248,0.5)",
										}}
										type="submit"
										className="uppercase glow-on-hover text-sm font-bold tracking-wide shadow-violet-500/50 shadow-2xl text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
									>
										Send Message
									</motion.button>
								)}
							</motion.div>
						</motion.div>
					</form>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Contact;
