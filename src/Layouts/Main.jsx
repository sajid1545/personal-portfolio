import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<ScrollRestoration/>
		</div>
	);
};

export default Main;
