import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';

const ProjectCard = ({ project, projectId, setProjectId }) => {
	const handleClick = () => {
		if (setProjectId) {
			setProjectId(project.id);
			projectId = project.id;
		}
	};

	const extraClasses = projectId
		? projectId == project.id
			? 'shadow-blue-800 cursor-pointer'
			: 'shadow-black cursor-pointer'
		: 'shadow-black';

	return (
		<div
			className={`w-60 md:w-80 shadow-lg rounded-xl m-auto ${extraClasses}`}
			onClick={handleClick}
		>
			<div
				className='h-44 md:h-60 rounded-t-xl relative group'
				style={{
					background: `url(${project.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='overlay items-center justify-center gap-2 absolute top-0 left-0 w-full h-full opacity-0 invisible group-hover:visible group-hover:flex group-hover:opacity-80 transition-all duration-500 bg-background flex'>
					<Link
						href={project.link}
						target='_blank'
						className='h-14 w-14 border-2 relative rounded-full border-text-secondary hover:border-text-primary group/link'
					>
						<FaLink className='h-10 w-10 text-text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-text-primary' />
					</Link>
					<Link
						href={project.github}
						target='_blank'
						className='h-14 w-14 border-2 relative rounded-full border-text-secondary hover:border-text-primary group/link'
					>
						<FaGithub className='h-10 w-10 text-text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-text-primary' />
					</Link>
				</div>
			</div>

			<Link href={`/projects/${project.id}`}>
				<div className='h-40 text-text-primary rounded-b-xl bg-card px-4 py-2 md:py-4 flex flex-col justify-between cursor-pointer'>
					<div>
						<h5 className='text-xl font-semibold mb-2'>{project.title}</h5>
						<p className='text-text-secondary mb-2'>{project.description}</p>
					</div>
					<p className='text-text-secondary font-semibold'>
						🛠️: {project.techStack}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default ProjectCard;
