import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';

const ProjectCard = ({ project, setProjectId }) => {
	const handleClick = () => {
		if (setProjectId) setProjectId(project.id);
	};
	return (
		<div
			className={
				setProjectId
					? 'w-60 md:w-80 shadow-lg shadow-black rounded-b-xl m-auto cursor-pointer'
					: 'w-60 md:w-80 shadow-lg shadow-black rounded-b-xl m-auto'
			}
			onClick={handleClick}
		>
			<div
				className='h-52 md:h-72 rounded-t-xl relative group'
				style={{
					background: `url(${project.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className='overlay items-center justify-center gap-2 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
					<Link
						href={project.link}
						target='_blank'
						className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
					>
						<FaLink className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
					</Link>
					<Link
						href={project.github}
						target='_blank'
						className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
					>
						<FaGithub className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
					</Link>
				</div>
			</div>

			{/* <Link href={`/project?=${project.id}`}> */}
			<div className='h-40 text-white rounded-b-xl bg-[#181818] px-4 py-2 md:py-4'>
				<h5 className='text-xl font-semibold mb-2'>{project.title}</h5>
				<p className='text-[#ADB7BE] mb-2'>{project.description}</p>
				<p className='text-[#ADB7BE] font-semibold'>🛠️: {project.techStack}</p>
			</div>
			{/* </Link> */}
		</div>
	);
};

export default ProjectCard;
