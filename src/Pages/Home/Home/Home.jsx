import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Projects from './../../Projects/Projects';

const Home = () => {
	return (
		<div>
			{/* <Particle/> */}
			<Banner />

			<About />
			<Projects/>
			<Contact/>
		</div>
	);
};

export default Home;
