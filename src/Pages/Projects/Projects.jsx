import React, { useEffect, useState } from 'react';
import MainSpinner from './../Shared/Spinners/MainSpinner';
import ProjectCard from './ProjectCard';

const Projects = () => {
	const [projects, setProjects] = useState([]);

	const [load, setLoad] = useState(false);

	useEffect(() => {
		setLoad(true);
		fetch('https://portfolio-server-indol.vercel.app/projects')
			.then((res) => res.json())
			.then((data) => {
				setProjects(data);
				setLoad(false);
			});
	}, []);

	if (load) {
		return <MainSpinner />;
	}

	return (
		<div>
			<div className="text-center font-extrabold  space-y-5 my-20">
				<h1 className="text-5xl underline  underline-offset-8 decoration-[#CE5FF8]">
					My recent Projects
				</h1>
				<p className="text-2xl">Here are few projects i've worked on recently</p>
			</div>

			<div
				// data-aos="zoom-in-down"
				className="w-[95%] mx-auto grid grid-cols-1  lg:grid-cols-2 gap-10 place-items-center ">
				{projects.map((project) => (
					<ProjectCard key={project._id} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
