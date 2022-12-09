import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import myPic from '../../assets/sajid-bg.png';
import Technologies from './../Technologies/Technologies';

const About = () => {
	return (
		<div id='about' className="my-10 h-screen">
			<h1 className="text-center my-10 font-extrabold text-5xl underline  underline-offset-8 decoration-[rgb(206,95,248)] ">About Me</h1>

			<div className="flex justify-center flex-col-reverse lg:flex-row  items-center w-[95%] gap-10 mx-auto">
				<div className="my-info w-full lg:w-[75%] text-center lg:text-left">
						<p className="text-3xl mb-10">
							Hi, I am <span className="font-extrabold text-[#CE5FF8] ">Sajjad Abdullah</span> from{' '}
							<span className="font-extrabold text-[#CE5FF8]">Chittagong, Bangladesh.</span> I am
							currently pursuing BSc. in Information Technology. I am passionate Web Developer who love building Web applications with JavaScript/React.js/express.js and some other cool libraries and frameworks
						</p>
				</div>

					<div className="my-pic w-[80%] lg:w-2/4">
						<img src={myPic} alt="" className="" />
					</div>
			</div>
			{/* <Technologies/> */}

		</div>
	);
};

export default About;
