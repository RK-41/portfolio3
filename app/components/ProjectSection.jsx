import ProjectSlider from './ProjectSlider';

const ProjectSection = () => {
	return (
		<section id='projects' className='w-full my-8'>
			<h2 className='text-center text-3xl sm:text-4xl font-bold text-white m-8 md:mb-12'>
				My Projects
			</h2>

			{/* Project slider */}
			<ProjectSlider />
		</section>
	);
};

export default ProjectSection;
