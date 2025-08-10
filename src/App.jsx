import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";

import { router } from "./Routes/routes";

import { BsArrowUpSquareFill } from "react-icons/bs";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Init AOS once
		AOS.init({ once: true, duration: 600, easing: "ease-out" });

		// Lightweight splash
		const t = setTimeout(() => setLoading(false), 1200);
		return () => clearTimeout(t);
	}, []);

	return (
		<>
			<ScrollToTop
				smooth
				aria-label="Scroll to top"
				component={<BsArrowUpSquareFill className="mx-auto text-3xl" />}
				style={{
					background: "transparent",
					boxShadow: "none",
				}}
				className="!bg-transparent !shadow-none !border-0 text-white"
			/>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
