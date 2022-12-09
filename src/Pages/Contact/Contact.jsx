import React from 'react';
import contactPic from '../../assets/contact-me.jpg';

const Contact = () => {
	return (
		<div className="w-[90%] mx-auto  my-10 ">
			<h1 className="text-center my-10 font-extrabold text-5xl underline decoration-double underline-offset-8 decoration-[rgb(206,95,248)] ">
				Get In Touch
			</h1>

			<div className="bg-white p-8 flex items-center rounded-xl gap-5  shadow-[4.0px_8.0px_8.0px_rgba(206,95,248)] cursor-pointer">
				{/* left side of form */}
				<div>
					<div className="text-black ">
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
							<span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
							<input
								class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text"
								placeholder=""
							/>
						</div>

						<div class="mt-8">
							<span class="uppercase text-sm text-gray-600 font-bold">Message</span>
							<textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
						</div>
						<div class="mt-8">
							<button class="uppercase text-sm font-bold tracking-wide bg-indigo-500  shadow-indigo-500/50 shadow-2xl text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
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

{
	/* <div class="inline-block relative w-64">
	<select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
		<option>Really long option that will likely overlap the chevron</option>
		<option>Option 2</option>
		<option>Option 3</option>
	</select>
	<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
		</svg>
	</div>
</div>; */
}