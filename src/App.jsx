import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import Particle from './Pages/Shared/Particle/Particle';
import MainSpinner from './Pages/Shared/Spinners/MainSpinner';
import { router } from './Routes/routes';

import { BsArrowUpSquareFill } from 'react-icons/bs';

function App() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<>
			<div className="">
				<Particle />
				{loading ? (
					<MainSpinner />
				) : (
					<>
						<ScrollToTop
							smooth
							component={<BsArrowUpSquareFill className="text-black mx-auto text-3xl" />}
						/>
						<RouterProvider router={router} />
					</>
				)}
			</div>
		</>
	);
}

export default App;
