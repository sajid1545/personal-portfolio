import React from 'react';

import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css3.png';
import javaScript from '../../assets/icons/javaScript.png';
import react from '../../assets/icons/react.png';
import mongoDB from '../../assets/icons/mongodb.png';
import express from '../../assets/icons/express.png';
import Carousel from 'react-multi-carousel';
import TechnologyCard from './TechnologyCard';

const Technologies = () => {
	const techs = [
		{
			id: '6393889ff34e297dd2f542a5',
			title: 'HTML',
			picture: html,
		},
		{
			id: '6393889f6002cbd199d55c18',
			title: 'CSS',
			picture: css,
		},
		{
			id: '6393889fcdc281faf6d0bcdc',
			title: 'REACT',
			picture: react,
		},
		{
			id: '6393889f9b52b767cd638355',
			title: 'JAVASCRIPT',
			picture: javaScript,
		},
		{
			id: '6393889f3ad791c1c156faf7',
			title: 'MONGODB',
			picture: mongoDB,
		},
		{
			id: '6393889f87c03a11fe6c3754',
			title: 'EXPRESS.js',
			picture: express,
		},
	];

	return (
		<div className=''>
			<h1 className="text-center my-10 font-extrabold text-5xl underline  underline-offset-8 decoration-[rgb(206,95,248)] ">
				Technologies
			</h1>

			<div className='flex justify-center items-center gap-10 flex-wrap'>
				{techs.map((tech, i) => (
					<TechnologyCard key={i} tech={tech} />
				))}
			</div>
		</div>
	);
};

export default Technologies;
