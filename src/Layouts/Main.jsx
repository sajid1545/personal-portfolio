import { motion, useScroll, useSpring } from "framer-motion";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./main.css";

const Main = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return (
		<div>
			<Navbar />
			<motion.div className="progress-bar" style={{ scaleX }}></motion.div>
			<Outlet />
			<ScrollRestoration />
			<Footer />
		</div>
	);
};

export default Main;
