import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch('https://server-three-lake.vercel.app/projects')
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);


	return (
		<div>
			<div className="text-center font-extrabold  space-y-5 my-10">
				<h1 className="text-5xl underline  underline-offset-8 decoration-[#CE5FF8]">
					My recent Projects
				</h1>
				<p className="text-2xl">Here are few projects i've worked on recently</p>
			</div>

			<div className="w-[95%] mx-auto grid grid-cols-1  lg:grid-cols-2 gap-10 place-items-center">
				{projects.map((project) => (
					<ProjectCard key={project._id} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
