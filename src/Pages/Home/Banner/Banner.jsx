import React from 'react';
import './banner.css'



const Banner = () => {

  

	return (
        <div className='flex h-screen justify-center items-center flex-col  '>
			<h1 className='font-extrabold text-8xl mb-10'>Sajjad Abdullah</h1>
			<h3 className='text-5xl font-extrabold'>Web Developer</h3>
			<button className="glow-on-hover mt-5 px-20 py-4 font-extrabold text-xl" type="button">Resume</button>
		</div>
	);
};

export default Banner;
