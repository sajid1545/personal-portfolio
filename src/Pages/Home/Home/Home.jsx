import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Technologies from "../../Technologies/Technologies";
import Banner from "../Banner/Banner";

const Home = () => {
	const controls = useAnimation();
	const { ref: aboutRef, inView: aboutInView } = useInView({
		triggerOnce: true,
	});
	const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true });
	const { ref: projectsRef, inView: projectsInView } = useInView({
		triggerOnce: true,
	});
	const { ref: contactRef, inView: contactInView } = useInView({
		triggerOnce: true,
	});

	React.useEffect(() => {
		if (aboutInView) {
			controls.start("visible");
		}
	}, [controls, aboutInView]);

	React.useEffect(() => {
		if (techInView) {
			controls.start("visible");
		}
	}, [controls, techInView]);

	React.useEffect(() => {
		if (projectsInView) {
			controls.start("visible");
		}
	}, [controls, projectsInView]);

	React.useEffect(() => {
		if (contactInView) {
			controls.start("visible");
		}
	}, [controls, contactInView]);

	const variants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<div>
			<Banner />
			<div className="space-y-60">
				<motion.div
					ref={aboutRef}
					initial="hidden"
					animate={controls}
					variants={variants}
				>
					<About />
				</motion.div>

				<motion.div
					ref={techRef}
					initial="hidden"
					animate={controls}
					variants={variants}
				>
					<Technologies />
				</motion.div>
			</div>

			<motion.div
				ref={projectsRef}
				initial="hidden"
				animate={controls}
				variants={variants}
			>
				<Projects />
			</motion.div>

			<motion.div
				ref={contactRef}
				initial="hidden"
				animate={controls}
				variants={variants}
			>
				<Contact />
			</motion.div>
		</div>
	);
};

export default Home;
