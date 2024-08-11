import React from 'react';
// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// required modules
import { Pagination, Autoplay, Scrollbar, Navigation } from 'swiper/modules';

// components
import ProjectCard from './ProjectCard';

const projectData = [
	{
		id: 1,
		title: 'Dig IT',
		description: 'Website for IT solution providing agency',
		image: '/images/projects/digIt.png',
		techStack: 'Next.js, Tailwind CSS',
		link: 'https://dig-it-eta.vercel.app/',
		github: 'https://github.com/RK-41/dig-it',
	},
	{
		id: 2,
		title: 'Cine Flix',
		description: 'Database for cinema related contents',
		image: '/images/projects/cineFlix.png',
		techStack: 'HTML, CSS, JavaScript, TMDB API',
		link: 'https://main--cineflixwebsite.netlify.app/',
		github: 'https://github.com/RK-41/vsis-internship-task4',
	},
	{
		id: 3,
		title: 'Task Manager',
		description: 'A web app to keep track of various tasks',
		image: '/images/projects/taskManager.png',
		techStack: 'React.js, Tailwind CSS',
		link: 'https://task-manager-five-jade.vercel.app/',
		github: 'https://github.com/RK-41/task-manager',
	},
	{
		id: 4,
		title: 'ShopWay',
		description: 'E-commerce website with end-to-end functionalities',
		image: '/images/projects/shopWay.png',
		techStack: 'MERN, Bootstrap',
		link: 'https://shopway-aw74.onrender.com/',
		github: 'https://github.com/RK-41/shopway',
	},
];

const ProjectSection = () => {
	return (
		<section id='projects' className='w-full my-8'>
			<h2 className='text-center text-3xl sm:text-4xl font-bold text-white m-8 md:mb-12'>
				My Projects
			</h2>

			{/* <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
				{projectData.map((project) => (
					<ProjectCard
						project={project}
					/>
				))}
			</div> */}

			{/* slider */}
			<div className='w-full h-max lg:max-w-full xl:max-w-[1100px] py-2 cursor-pointer m-auto bg-transparent'>
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
								<ProjectCard key={project.id} project={project} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default ProjectSection;
