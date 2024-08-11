import Link from 'next/link';
import ProjectSlider from './ProjectSlider';

const ProjectSection = () => {
	return (
		<section id='projects' className='w-full my-8'>
			<h2 className='text-center text-3xl sm:text-4xl font-bold text-white m-8 md:mb-12'>
				My Projects
			</h2>

			{/* Project slider */}
			<ProjectSlider />

			<Link href='/projects'>
				<button className='bg-blue-600 hover:bg-blue-700 font-medium py-2.5 rounded-lg w-full'>
					Project Details
				</button>
			</Link>
		</section>
	);
};

export default ProjectSection;
