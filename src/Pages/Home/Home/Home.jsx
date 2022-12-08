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
		</div>
	);
};

export default Home;
