import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
	return (
		<footer className='footer border border-t-default border-l-transparent border-r-transparent text-text-primary bg-bg-primary'>
			<div className='container py-6 flex justify-center mx-auto'>
				<div className='flex flex-col items-center justify-center gap-4'>
					<SocialLinks className='text-2xl' />
					<p className='text-secondary-text text-sm'>
						© {new Date().getFullYear()} Rajan Kumar. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
