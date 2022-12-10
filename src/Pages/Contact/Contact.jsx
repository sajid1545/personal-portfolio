import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import contactPic from '../../assets/contact-me-2.jpg';
import SmallSpinner from '../Shared/Spinners/SmallSpinner';

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
				import.meta.env.VITE_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);

					Swal.fire({
						icon: 'success',
						title: 'Message sent Successfully',
					});
					setLoading(false);
				},
				(error) => {
					console.log(error.text);
					setLoading(false);
				}
			);

		e.target.reset();
	};

	return (
		<div className="w-[90%] mx-auto  my-10   ">
			<h1 className="text-center my-10 font-extrabold text-5xl underline  underline-offset-8 decoration-[#ce5ff8] ">
				Contact Me
			</h1>

			<div className=" shadow-[0_10px_20px_rgba(206,95,248,_0.7)]   p-8 flex flex-col lg:flex-row  rounded-xl gap-5   cursor-pointer my-10">
				{/* left side of form */}
				<div>
					<div className="">
						<h1 className="text-4xl font-extrabold">Lets talk about anything!</h1>
						<p className="mt-3">
							Hate forms? Send me an{' '}
							<span className="text-purple-700 font-bold hover:underline underline-offset-8 duration-500">
								<a href="mailto:sajjadabdullah9962@gmail.com" className=''>email</a>
							</span>{' '}
							instead.
						</p>
					</div>

					<div className="p-10 animate-pulse">
						<img src={contactPic} alt="" className="contact-image rounded-3xl h-[600px] w-full p-5 -m-5 " />
					</div>
				</div>

				{/* right side of form */}

				<div className="w-[90%] lg:w-2/4 mx-auto">
					<h1 className="text-center my-10 font-extrabold text-5xl underline  underline-offset-8 decoration-[rgb(206,95,248)] ">
						Get In Touch
					</h1>
					<form ref={form} onSubmit={sendEmail}>
						<div className="">
							<div>
								<span className="uppercase text-sm  font-bold">Full Name</span>
								<input
									name="user_name"
									className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline   focus:outline-offset-4 focus:outline-[#bb44ea] focus:shadow-outline"
									type="text"
								/>
							</div>
							<div className="my-5">
								<span className="uppercase text-sm  font-bold">Email</span>
								<input
									name="user_email"
									className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline   focus:outline-offset-4 focus:outline-[#bb44ea] focus:shadow-outline"
									type="email"
								/>
							</div>

							<div className="mt-8">
								<span className="uppercase text-sm  font-bold">Message</span>
								<textarea
									name="message"
									className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline   focus:outline-offset-4 focus:outline-[#bb44ea] focus:shadow-outline"></textarea>
							</div>
							<div className="mt-8">
								{loading ? (
									<SmallSpinner />
								) : (
									<>
										<button
											type="submit"
											className="uppercase glow-on-hover  text-sm font-bold tracking-wide   shadow-violet-500/50 shadow-2xl text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
											Send Message
										</button>
									</>
								)}
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
