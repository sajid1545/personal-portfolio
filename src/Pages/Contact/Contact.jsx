import React, { useRef } from 'react';
import contactPic from '../../assets/contact-me.jpg';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
	// console.log(import.meta.env.VITE_SERVICE_ID);
	// console.log(import.meta.env.VITE_TEMPLATE_ID);
	// console.log(import.meta.env.VITE_USER_ID);

	const form = useRef();

	console.log(form);

	const sendEmail = (e) => {
		e.preventDefault();

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
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<div className="w-[90%] mx-auto  my-10 h-screen  ">
			<h1 className="text-center my-10 font-extrabold text-5xl underline  underline-offset-8 decoration-[rgb(206,95,248)] ">
				Get In Touch
			</h1>

			<div className="bg-slate-900  p-8 flex items-center rounded-xl gap-5  shadow-[4.0px_8.0px_8.0px_rgba(206,95,248)] cursor-pointer my-10">
				{/* left side of form */}
				<div>
					<div className="">
						<h1 className="text-4xl font-extrabold">Lets talk about anything!</h1>
						<p className="">
							Hate forms? Send us an <span className="text-purple-700 font-bold">email</span>{' '}
							instead.
						</p>
					</div>

					<div>
						<img src={contactPic} alt="" className="p-5" />
					</div>
				</div>

				{/* right side of form */}

				<div className="w-2/4">
					<form ref={form} onSubmit={sendEmail}>
						<div className="">
							<div>
								<span className="uppercase text-sm  font-bold">Full Name</span>
								<input
									name="user_name"
									className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
									type="text"
								/>
							</div>
							<div className="my-5">
								<span className="uppercase text-sm  font-bold">Email</span>
								<input
									name="user_email"
									className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
									type="email"
								/>
							</div>

							<div className="mt-8">
								<span className="uppercase text-sm  font-bold">Message</span>
								<textarea
									name="message"
									className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
							</div>
							<div className="mt-8">
								<button
									type="submit"
									className="uppercase glow-on-hover  text-sm font-bold tracking-wide   shadow-violet-500/50 shadow-2xl text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
									Send Message
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
