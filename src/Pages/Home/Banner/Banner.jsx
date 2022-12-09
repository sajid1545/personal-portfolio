import React from 'react';
import './banner.css';
import MovingText from 'react-moving-text';

const Banner = () => {
	return (
		<div className="flex h-screen justify-center items-center flex-col  ">
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
			<a
				target="_blank"
				href="https://drive.google.com/file/d/12EhVHS0PJwue7XtpgIMbl3XxmjkIs9dG/view?usp=share_link">
				<button className="glow-on-hover mt-10 px-14 py-4 font-extrabold text-xl" type="button">
					See My Resume
				</button>
			</a>
		</div>
	);
};

export default Banner;
