import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Technologies from '../../Technologies/Technologies';
import Banner from '../Banner/Banner';
import Projects from './../../Projects/Projects';

const Home = () => {
	return (
		<div>

			{/* <Particle/> */}
			<Banner />

			<About />
			<Technologies/>
			<Projects/>
			<Contact/>
		</div>
	);
};

export default Home;
