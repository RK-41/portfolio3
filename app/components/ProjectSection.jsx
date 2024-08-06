import React from 'react';
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
		techStack: 'MERN',
		link: 'https://shopway-aw74.onrender.com/',
		github: 'https://github.com/RK-41/shopway',
	},
];

const ProjectSection = () => {
	return (
		<section id='projects'>
			<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
				My Projects
			</h2>

			<div className='grid md:grid-cols-3 gap-8 md:gap-12'>
				{projectData.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						techStack={project.techStack}
						link={project.link}
						github={project.github}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectSection;
