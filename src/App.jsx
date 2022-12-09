import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Particle from './Pages/Shared/Particle/Particle';
import MainSpinner from './Pages/Shared/Spinners/MainSpinner';
import { router } from './Routes/routes';

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
						<RouterProvider router={router} />
					</>
				)}
			</div>
		</>
	);
}

export default App;
