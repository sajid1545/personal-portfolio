import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import myPic from '../../assets/sajid-bg.png';

const About = () => {
	return (
		<div className="my-10">
			<h1 className="text-center my-10 font-extrabold text-5xl underline decoration-double underline-offset-8 decoration-[#CE5FF8] ">About Me</h1>

			<div className="flex justify-center  items-center w-[95%] gap-10 mx-auto">
				<div className="my-info w-[75%]">
						<p className="text-3xl">
							Hi, I am <span className="font-extrabold text-[#CE5FF8] ">Sajjad Abdullah</span> from{' '}
							<span className="font-extrabold text-[#CE5FF8]">Chittagong, Bangladesh.</span> I am
							currently pursuing BSc. in Information Technology
						</p>
				</div>

					<div className="my-pic">
						<img src={myPic} alt="" className="" />
					</div>
			</div>
		</div>
	);
};

export default About;
