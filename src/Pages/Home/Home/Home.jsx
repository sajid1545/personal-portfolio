import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';

const Home = () => {
	return (
		<div>
			{/* <Particle/> */}
			<Banner />

			<About />
			<Contact/>
		</div>
	);
};

export default Home;
