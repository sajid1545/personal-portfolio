import React from 'react';
import contactPic from '../../assets/contact-me.jpg';

const Contact = () => {
	return (
		<div className="w-[90%] mx-auto  my-10 ">
			<h1 className="text-center my-10 font-extrabold text-5xl underline  underline-offset-8 decoration-[rgb(206,95,248)] ">
				Get In Touch
			</h1>

			<div className="bg-slate-900  p-8 flex items-center rounded-xl gap-5  shadow-[4.0px_8.0px_8.0px_rgba(206,95,248)] cursor-pointer">
				{/* left side of form */}
				<div>
					<div className="">
						<h1 className="text-4xl font-extrabold">Lets talk about anything!</h1>
						<p className="">
							Hate forms? Send us an <span className='text-purple-700 font-bold'>email</span> instead.
						</p>
					</div>

					<div>
						<img src={contactPic} alt="" className="p-5" />
					</div>
				</div>

				{/* right side of form */}

				<div className="w-2/4">
					<div class="">
						<div>
							<span class="uppercase text-sm  font-bold">Full Name</span>
							<input
								class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text"
								placeholder=""
							/>
						</div>

						<div class="mt-8">
							<span class="uppercase text-sm  font-bold">Message</span>
							<textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
						</div>
						<div class="mt-8">
							<button class="uppercase glow-on-hover  text-sm font-bold tracking-wide   shadow-violet-500/50 shadow-2xl text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;


