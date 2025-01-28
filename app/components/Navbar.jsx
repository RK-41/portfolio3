'use client';
import { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import MenuOverlay from './MenuOverlay';
import Logo from './Logo';
import { navLinkData } from '../assets';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const { theme, toggleTheme } = useTheme();

	return (
		<nav className='fixed top-0 left-0 right-0 z-10 bg-navbar bg-opacity-95'>
			<div className='flex flex-wrap items-center justify-between mx-auto px-8 py-2'>
				{/* LOGO */}
				<Logo />

				<div className='flex items-center gap-4'>
					{/* Mobile Menu Button */}
					<div className='mobile-menu md:hidden flex items-center gap-4'>
						{/* Theme Toggle Button */}
						<button
							onClick={toggleTheme}
							className='p-2 rounded-lg text-navbar hover:text-primary'
							aria-label='Toggle theme'
						>
							{theme === 'dark' ? (
								<SunIcon className='h-6 w-6' />
							) : (
								<MoonIcon className='h-6 w-6' />
							)}
						</button>
						{navbarOpen ? (
							<button
								onClick={() => setNavbarOpen(false)}
								className='flex items-center px-3 py-2 border rounded border-text-secondary text-text-secondary hover:text-text-primary hover:border-text-primary'
							>
								<XMarkIcon className='h-5 w-5' />
							</button>
						) : (
							<button
								onClick={() => setNavbarOpen(true)}
								className='flex items-center px-3 py-2 border rounded border-text-secondary text-text-secondary hover:text-text-primary hover:border-text-primary'
							>
								<Bars3Icon className='h-5 w-5' />
							</button>
						)}
					</div>
				</div>

				<div className='menu hidden md:block md:w-auto' id='navbar'>
					<ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
						{/* Theme Toggle Button */}
						<button
							onClick={toggleTheme}
							className='py-2 rounded-lg text-navbar hover:text-primary'
							aria-label='Toggle theme'
						>
							{theme === 'dark' ? (
								<SunIcon className='h-6 w-6' />
							) : (
								<MoonIcon className='h-6 w-6' />
							)}
						</button>

						{navLinkData.map((link, index) => (
							<li key={index} className='flex items-center gap-4'>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>

			{navbarOpen ? (
				<MenuOverlay links={navLinkData} onClick={() => setNavbarOpen(false)} />
			) : null}
		</nav>
	);
};

export default Navbar;
