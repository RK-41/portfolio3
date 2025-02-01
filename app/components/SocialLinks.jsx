import Link from 'next/link';
import {
	SiGithub,
	SiLinkedin,
	SiDiscord,
	SiLeetcode,
	SiGeeksforgeeks,
} from 'react-icons/si';

const SocialLinks = ({ className = '' }) => {
	return (
		<div className={`socials flex flex-wrap gap-4 text-3xl ${className}`}>
			<Link
				href='https://www.linkedin.com/in/mr-rajankumar'
				target='_blank'
				className='flex items-center justify-center py-1 sm:w-fit text-primary-text hover:scale-125 transition-transform duration-200 hover:-translate-y-1'
			>
				<SiLinkedin />
			</Link>
			<Link
				href='https://github.com/RK-41'
				target='_blank'
				className='flex items-center justify-center py-1 sm:w-fit text-primary-text hover:scale-125 transition-transform duration-200 hover:-translate-y-1'
			>
				<SiGithub />
			</Link>
			<Link
				href='https://discord.com/channels/@me/1000062447929016340'
				target='_blank'
				className='flex items-center justify-center py-1 sm:w-fit text-primary-text hover:scale-125 transition-transform duration-200 hover:-translate-y-1'
			>
				<SiDiscord />
			</Link>
			<Link
				href='https://leetcode.com/rk41'
				target='_blank'
				className='flex items-center justify-center py-1 sm:w-fit text-primary-text hover:scale-125 transition-transform duration-200 hover:-translate-y-1'
			>
				<SiLeetcode />
			</Link>
			<Link
				href='https://www.geeksforgeeks.org/user/a_joker41/'
				target='_blank'
				className='flex items-center justify-center py-1 sm:w-fit text-primary-text hover:scale-125 transition-transform duration-200 hover:-translate-y-1'
			>
				<SiGeeksforgeeks />
			</Link>
		</div>
	);
};

export default SocialLinks;
