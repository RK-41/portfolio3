// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// components
import ProjectCard from '../components/ProjectCard';

// data
import { projectData } from '../assets';

const ProjectSlider = ({ setProjectId }) => {
	return (
		<div className='w-full h-max lg:max-w-full xl:max-w-[1100px] py-2 m-auto bg-transparent'>
			<Swiper
				className='h-[400px] md:h-[480px]'
				slidesPerView={1}
				breakpoints={{
					440: {
						slidesPerView: 1.4,
					},
					540: {
						slidesPerView: 1.8,
					},
					640: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 2.8,
					},
					1200: {
						slidesPerView: 3,
					},
				}}
				initialSlide={1}
				loop={true}
				spaceBetween={20}
				centeredSlides={true}
				modules={[Autoplay, Navigation, Pagination]}
				autoplay={{ pauseOnMouseEnter: true, delay: '3000' }}
				navigation={{}}
				// pagination={{ clickable: true }}
				// style={{
				// 	'--swiper-pagination-color': '#0044ff',
				// 	'--swiper-pagination-bullet-inactive-color': '#999999',
				// 	'--swiper-pagination-bullet-inactive-opacity': '1',
				// 	'--swiper-pagination-bullet-size': '8px',
				// 	'--swiper-pagination-bullet-horizontal-gap': '10px',
				// }}
			>
				{projectData.map((project, index) => {
					return (
						<SwiperSlide key={index}>
							<ProjectCard
								key={project.id}
								project={project}
								setProjectId={setProjectId}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default ProjectSlider;
