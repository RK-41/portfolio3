import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, onClick }) => {
	return (
		<ul className='flex flex-col pb-4 items-center bg-navbar'>
			{links.map((link, index) => (
				<li key={index}>
					<NavLink href={link.path} title={link.title} onClick={onClick} />
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;
