import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from './../Pages/Home/Home/Home';
import About from './../Pages/About/About';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);
