import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from './../Pages/Home/Home/Home';
import About from './../Pages/About/About';
import Projects from './../Pages/Projects/Projects';
import ErrorPage from './../Pages/Shared/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
		],
	},
]);
