import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
	const { _id, title, picture, description } = project;

	return (
		<div className="rounded-2xl lg:h-[620px]  shadow-[0_10px_20px_rgba(206,95,248,_0.7)]  p-1  lg:w-[600px] my-10">
			<div className="block mx-auto rounded-xl  p-6  sm:p-8 cursor-pointer ">
				<img alt="Art" src={picture} className="h-[300px] w-full bg-cover rounded-lg" />
				<div className="mt-5">
					<h3 className="text-3xl font-extrabold text-center my-3">{ title }</h3>

					<p className="mt-2 text-md text-center ">{description}</p>

					<div>
						<Link to={`/project/${_id}`}>
							<button className="items-center px-20 py-3 block mx-auto my-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
								More Details
							</button>
						</Link>
					</div>

					
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
