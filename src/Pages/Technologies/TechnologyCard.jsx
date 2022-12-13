import React from 'react';

const TechnologyCard = ({ tech }) => {
	return (
		<div className="mt-10 mb-10">
			<div className="group relative block  cursor-pointer mx-auto tech-card">
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
			{/* <div class="group flex duration-500 flex-col items-center justify-center w-full max-w-sm mx-auto">
				<div class="w-full h-64  bg-center bg-cover rounded-lg shadow-md  "
				style={{backgroundImage: `url(${tech.picture})`}}
				></div>

				<div class="relative bottom-20 w-56 -mt-10 overflow-hidden  rounded-lg shadow-lg md:w-64">
					<h3 class="hidden group-hover:block duration-700 py-2 font-bold tracking-wide text-center  uppercase ">
						{  tech.title}
					</h3>
				</div>
			</div> */}
		</div>
	);
};

export default TechnologyCard;
