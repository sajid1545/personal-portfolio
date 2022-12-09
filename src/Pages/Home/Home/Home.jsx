import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import About from '../../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
	return (
		<div>
			{/* <Particle/> */}
			<Banner />

			<About />
			{/* <AnimationOnScroll animateIn="animate__bounceInUp">
			</AnimationOnScroll> */}
		</div>
	);
};

export default Home;
