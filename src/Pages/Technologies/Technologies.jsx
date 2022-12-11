import React from 'react';
import TechnologyCard from './TechnologyCard';
import Marquee from 'react-fast-marquee';

import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css3.png';
import javaScript from '../../assets/icons/javaScript.png';
import react from '../../assets/icons/react.png';
import mongoDB from '../../assets/icons/mongodb.png';
import express from '../../assets/icons/express.png';
import tailwind from '../../assets/icons/tailwind.png';

const Technologies = () => {
	const techs = [
		{
			id: '1',
			title: 'HTML',
			picture: html,
		},
		{
			id: '2',
			title: 'CSS',
			picture: css,
		},
		{
			id: '3',
			title: 'Tailwind CSS',
			picture: tailwind,
		},
		{
			id: '4',
			title: 'REACT',
			picture: react,
		},
		{
			id: '5',
			title: 'JAVASCRIPT',
			picture: javaScript,
		},
		{
			id: '6',
			title: 'MONGODB',
			picture: mongoDB,
		},
		{
			id: '7',
			title: 'EXPRESS.js',
			picture: express,
		},
	];

	return (
		<div className="mt-[150px] md:mt-[370px] lg:mt-10">
			<h1 className="text-center my-10 font-extrabold text-5xl underline  underline-offset-8 decoration-[rgb(206,95,248)] ">
				My Skills
			</h1>

			

			<Marquee gradient={false} speed={150} pauseOnHover={true} >
				<div className="flex justify-center items-center gap-10 mt-10 mb-20  flex-wrap">
					{techs.map((tech) => (
						<TechnologyCard key={tech.id} tech={tech} />
					))}
				</div>
			</Marquee>
		</div>
	);
};

export default Technologies;
