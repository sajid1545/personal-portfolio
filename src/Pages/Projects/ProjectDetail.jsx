import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectDetail = () => {
	const project = useLoaderData();
	console.log(project);

	const { client, server, title, picture, liveSite, description, image1, image2, image3, image4 } =
		project;

	return (
		<div>
			<h1 className="text-5xl text-center my-5 font-extrabold ">{title}</h1>

			<div className='my-10 w-[80%] mx-auto'>
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
						<img src={picture} alt=""  />
					</SwiperSlide>
					<SwiperSlide>
						<img src={image2} alt=""  />
					</SwiperSlide>
					<SwiperSlide>
						<img src={image3} alt=""  />
					</SwiperSlide>
					<SwiperSlide>
						<img src={image4} alt=""  />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default ProjectDetail;
