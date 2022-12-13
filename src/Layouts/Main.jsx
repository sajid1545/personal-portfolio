import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { motion, useScroll,useSpring } from "framer-motion";
import './main.css'

const Main = () => {
	const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
	return (
		<div>
			<Navbar />
			<motion.div className="progress-bar"
        style={{ scaleX }}>

			</motion.div>
			<Outlet />
			<ScrollRestoration/>
		</div>
	);
};

export default Main;
