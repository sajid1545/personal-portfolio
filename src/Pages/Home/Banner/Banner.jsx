import React from 'react';
import './banner.css';
// import resume from '../../../assets/Resume/Sajjad Abdullah Web Developer.pdf'

const Banner = () => {
	return (
		<div className="flex h-screen justify-center items-center flex-col  mb-10  ">
			{/* <MovingText
				type="pulse"
				duration="1500ms"
				delay="0s"
				direction="normal"
				timing="ease"
				iteration="infinite"
				fillMode="forwards">
			</MovingText> */}
			<h1 className="my-name font-extrabold text-5xl lg:text-8xl mb-10 ">Sajjad Abdullah</h1>
			<h3 className="text-3xl lg:text-5xl font-extrabold">Web Developer</h3>
			<div className="flex items-center justify-center gap-5">
				<a
					target="_blank"
					href="https://drive.google.com/file/d/12EhVHS0PJwue7XtpgIMbl3XxmjkIs9dG/view?usp=share_link">
					<button
						className="glow-on-hover bg-[#191328] mt-10 px-14 py-4 font-extrabold text-xl"
						type="button">
						See My Resume
					</button>
				</a>

				<a
					href="/src/assets/Resume/Sajjad Abdullah Web Developer.pdf"
					download="Sajjad-Abdullah Portfolio">
					<button
						type="button"
						class="glow-on-hover bg-[#191328] mt-10 px-4 py-4 font-extrabold text-xl flex">
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/>
						</svg>
					</button>
				</a>
			</div>
		</div>
	);
};

export default Banner;
