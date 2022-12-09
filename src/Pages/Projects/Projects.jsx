import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
	return (
		<div>
			<div className="text-center font-extrabold  space-y-5 my-10">
				<h1 className="text-5xl underline decoration-double underline-offset-8 decoration-[#CE5FF8]">
					My recent Projects
				</h1>
				<p className="text-2xl">Here are few projects i've worked on recently</p>
			</div>

			<div className="w-[95%] mx-auto grid grid-cols-1  lg:grid-cols-2 gap-10 place-items-center">
				{/* project - 1 */}
				<div className="rounded-2xl  shadow-[0_10px_20px_0px_rgba(206,95,248,_0.7)]  p-1  w-[600px]  my-10 ">
					<div className="block rounded-xl  p-6  sm:p-8 cursor-pointer ">
						<img
							alt="Art"
							src="https://i.ibb.co/5R4PYgk/Laptop-city.jpg"
							className="h-96 w-full  bg-cover rounded-lg"
						/>
						<div className="mt-5">
							<h3 className="text-3xl font-extrabold text-center my-3">Laptop City</h3>

							<p className="mt-2 text-md text-center ">
								Laptop City is a laptop reselling website. It is a MERN project. I have used HTML,
								CSS, Tailwind CSS, React.js, Express.js, MongoDB, and Firebase. Laptop city was
								about a refurbished Laptop reselling website.
							</p>

							<div className="grid grid-cols-3 gap-5 mt-5 place-items-center">
								<a href="https://github.com/sajid1545/laptop-city-cllient" target="_blank">
									<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
										<span className="mx-1">Client Code</span>
									</button>
								</a>
								<a href="https://github.com/sajid1545/laptop-city-server" target="_blank">
									<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
										<span className="mx-1">Server Code</span>
									</button>
								</a>
								<a href="https://laptop-city-3d932.web.app/" target="_blank">
									<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
										<span className="mx-1">Live site</span>
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* project - 2  */}

				<div className="rounded-2xl  shadow-[0_10px_20px_rgba(206,95,248,_0.7)]  p-1  w-[600px] my-10">
					<div className="block mx-auto rounded-xl  p-6  sm:p-8 cursor-pointer ">
						<img
							alt="Art"
							src="https://i.ibb.co/DkC0Q04/Nikah-photography.jpg"
							className="h-96 w-full bg-cover rounded-lg"
						/>
						<div className="mt-5">
							<h3 className="text-3xl font-extrabold text-center my-3">Nikah Photography</h3>

							<p className="mt-2 text-md text-center ">
								Nikah photography is a personal service app for wedding photographers. It is a MERN
								Stack project. I have used HTML, CSS, Tailwind CSS, React.js, Express.js, MongoDB,
								and Firebase.
							</p>

							<div className="grid grid-cols-3 gap-5 mt-5 place-items-center">
								<a href="https://github.com/sajid1545/Nikah-photography_client" target="_blank">
									<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
										<span className="mx-1">Client Code</span>
									</button>
								</a>
								<a href="https://github.com/sajid1545/Nikah-photography_server" target="_blank">
									<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
										<span className="mx-1">Server Code</span>
									</button>
								</a>
								<a href="https://assignment-11-cf2b9.web.app/" target="_blank">
									<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
										<span className="mx-1">Live site</span>
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* project - 3 */}

				<div className="rounded-2xl  shadow-[0_10px_20px_rgba(206,95,248,_0.7)]  p-1  w-[600px] my-10">
					<div className="block mx-auto rounded-xl  p-6  sm:p-8 cursor-pointer ">
						<img
							alt="Art"
							src="https://i.ibb.co/2y9Kjp1/Epic-coding.jpg"
							className="h-96 w-full bg-cover rounded-lg"
						/>
						<div className="mt-5">
							<h3 className="text-3xl font-extrabold text-center my-3">Epic Coding</h3>

							<p className="mt-2 text-md text-center ">
								Epic Coding is an online education platform . It is a MERN Stack project. I have
								used HTML, CSS, Tailwind CSS, React.js, Express.js, MongoDB, and Firebase.Users can
								select any of the courses from available courses.
							</p>

							<div className="grid grid-cols-3 gap-5 mt-5 place-items-center">
								<a href="https://github.com/sajid1545/epic-coding_client" target="_blank">
									<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
										<span className="mx-1">Client Code</span>
									</button>
								</a>
								<a href="https://github.com/sajid1545/epic-coding_server" target="_blank">
									<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
										<span className="mx-1">Server Code</span>
									</button>
								</a>
								<a href="https://assignment-10-epic-coding.web.app/" target="_blank">
									<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
										<span className="mx-1">Live site</span>
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
