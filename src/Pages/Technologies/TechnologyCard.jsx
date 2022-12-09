import React from 'react';

const TechnologyCard = ({ tech }) => {
	return (
		<div className="mb-10 mt-5">
			<div className="group relative block bg-black cursor-pointer mx-auto">
				<img
					alt="Developer"
					src={tech.picture}
					className="absolute inset-0 h-full w-[150px]  opacity-75 transition-opacity group-hover:opacity-50 "
				/>

				<div className="relative p-8">
					<div className="">
						<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
							<p className="text-xl font-bold text-white text-center">{tech.title}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechnologyCard;
