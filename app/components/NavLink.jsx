import Link from 'next/link';

const NavLink = ({ href, title, onClick }) => {
	return (
		<Link
			href={href}
			className='block py-2 pl-3 pr-4 text-navbar sm:text-xl rounded md:p-0 hover:text-primary'
			onClick={onClick}
		>
			{title}
		</Link>
	);
};

export default NavLink;
