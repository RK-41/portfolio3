'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ProjectSlider from '../components/ProjectSlider';
import { projectData } from '../assets';

const Project = ({ searchParams }) => {
	const key = Object.keys(searchParams)[0];
	const val = Object.values(searchParams)[0];
	const id = key | val;

	const project = projectData.find((p) => p.id == id);

	if (!project)
		return (
			<section className='h-[85vh] px-8 pt-20 text-white bg-[#121212]'>
				<div className='h-full pt-4 pb-8 md:pb-12 sm:px-4 xl:px-16'>
					<h2 className='text-center text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-8'>
						404 not found!
					</h2>
				</div>
			</section>
		);

	return (
		<section className='h-full px-8 pt-20 text-white bg-[#121212]'>
			<div className='pt-4 pb-8 md:pb-12 sm:px-4 xl:px-16'>
				<h2 className='text-center text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-8'>
					Project {project.title}
				</h2>

				{/* Project Image Swiper-Slider */}
				<div className='max-w-[640px] h-max max-h-[70vhs] aspect-auto m-auto rounded-xl shadow-xl shadow-black mb-8 bg-transparent'>
					<Swiper
						className='max-h-[460px] rounded-xl'
						slidesPerView={1}
						loop={true}
						modules={[Autoplay, Navigation, Pagination]}
						autoplay={{ pauseOnMouseEnter: true, delay: '3000' }}
						navigation={{}}
						pagination={{ clickable: true }}
					>
						{project.images.map((imgSrc, index) => {
							return (
								<SwiperSlide key={index}>
									<img
										src={imgSrc}
										alt={project.title}
										className='w-full h-full object-cover rounded-xl'
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				{/* Project Details */}
				<div className='h-max min-h-80 p-8 md:px-12 bg-[#181818] rounded-xl shadow-xl shadow-black font-light leading-relaxed'>
					<div className='mb-6'>
						<h3 className='text-xl sm:text-2xl font-semibold mb-2'>
							Description
						</h3>

						<p className='text-[#ADB7BE] mb-6'>{project.description}</p>
					</div>

					<div className='mb-6'>
						<h3 className='text-xl sm:text-2xl font-semibold mb-2'>
							Tech Stack
						</h3>
						<p className='text-[#ADB7BE]'>{project.techStack}</p>
					</div>

					<div className='mb-6'>
						<h3 className='text-xl sm:text-2xl font-semibold mb-2'>Features</h3>
						<ul className='list-disc list-inside text-[#ADB7BE]'>
							{project.features.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>
					</div>

					<div className='text-sm sm:text-lg flex gap-4 mt-8 font-semibold'>
						<Link href={project.link} target='_blank'>
							<p className='bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg'>
								Live Demo
							</p>
						</Link>
						<Link href={project.github} target='_blank'>
							<p className='bg-gray-700 hover:bg-gray-800 py-2 px-4 rounded-lg'>
								GitHub Repo
							</p>
						</Link>
					</div>
				</div>
			</div>

			<div className='px-4 xl:px-16 mt-12'>
				<h2 className='text-center text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-8'>
					Checkout Other Projects
				</h2>
				<ProjectSlider />
			</div>
		</section>
	);
};

export default Project;
