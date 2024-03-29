import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

const ProjectDetail = () => {
	const project = useLoaderData();

	const {
		client,
		server,
		title,
		picture,
		liveSite,
		detail1,
		detail2,
		detail3,
		detail4,
		detail5,
		image1,
		image2,
		image3,
		image4,
	} = project;

	return (
		<div>
			<h1 className="text-5xl text-center my-5 font-extrabold ">{title}</h1>

			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					default: {
						duration: 0.3,
						ease: [0, 0.71, 0.2, 1.01],
					},
					scale: {
						type: 'spring',
						damping: 5,
						stiffness: 100,
						restDelta: 0.001,
					},
				}}
				className="my-10 lg:w-[80%] mx-auto">
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper">
					<SwiperSlide>
						<img src={picture} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={image2} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={image3} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={image4} alt="" />
					</SwiperSlide>
				</Swiper>
			</motion.div>

			<div>
				<article className="rounded-xl border border-gray-700 bg-gray-800 p-5 lg:p-14 lg:w-[80%] mx-auto my-20">
					<div className="">
						<h3 className="text-2xl text-white text-center">{title} Features </h3>
					</div>

					<ul className="mt-4 space-y-2 ">
						<li>
							<span className="block h-full rounded-lg border border-gray-700 p-4 hover:border-[#9D49BC]">
								<p className="mt-1 text-md font-medium text-gray-300">{detail1}</p>
							</span>
						</li>

						<li>
							<span className="block h-full rounded-lg border border-gray-700 p-4 hover:border-[#9D49BC]">
								<p className="mt-1 text-md font-medium text-gray-300">{detail2}</p>
							</span>
						</li>
						<li>
							<span className="block h-full rounded-lg border border-gray-700 p-4 hover:border-[#9D49BC]">
								<p className="mt-1 text-md font-medium text-gray-300">{detail3}</p>
							</span>
						</li>
						<li>
							<span className="block h-full rounded-lg border border-gray-700 p-4 hover:border-[#9D49BC]">
								<p className="mt-1 text-md font-medium text-gray-300">{detail4}</p>
							</span>
						</li>
						<li>
							<span className="block h-full rounded-lg border border-gray-700 p-4 hover:border-[#9D49BC]">
								<p className="mt-1 text-md font-medium text-gray-300">{detail5}</p>
							</span>
						</li>
					</ul>

					<div className=" flex flex-col items-center md:flex-row gap-10 mt-10 ">
						<a href={client} target="_blank">
							<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
								<AiFillGithub />

								<span className="mx-1">Client Code</span>
							</button>
						</a>

						{!server ? null : (
							<a href={server} target="_blank">
								<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
									<AiFillGithub />

									<span className="mx-1">Server Code</span>
								</button>
							</a>
						)}

						<a href={liveSite} target="_blank">
							<button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#551a8b] rounded-lg hover:bg-[#9400d3] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
								<BiLinkExternal />
								<span className="mx-1">Live site</span>
							</button>
						</a>
					</div>
				</article>
			</div>
		</div>
	);
};

export default ProjectDetail;
