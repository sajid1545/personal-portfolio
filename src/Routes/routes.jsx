import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from './../Pages/Home/Home/Home';
import About from './../Pages/About/About';
import Projects from './../Pages/Projects/Projects';
import ErrorPage from './../Pages/Shared/ErrorPage/ErrorPage';
import ProjectDetail from './../Pages/Projects/ProjectDetail';
import Blogs from './../Pages/Blogs/Blogs';
import Contact from './../Pages/Contact/Contact';

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
			{
				path: '/project/:id',
				element: <ProjectDetail />,
				loader: ({ params }) => fetch(`https://server-three-lake.vercel.app/project/${params.id}`),
			},
			{
				path: '/blogs',
				element: <Blogs />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);
