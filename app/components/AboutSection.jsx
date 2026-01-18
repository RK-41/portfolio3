'use client';

import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';
import { tabData } from '../assets';

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section
			className='text-text-primary mt-12 md:mt-0 scroll-mt-10 min-h-screen'
			id='about'
		>
			<div className='py-8 sm:px-4 sm:py-12 xl:px-16'>
				<h2 className='text-3xl sm:text-4xl font-bold text-text-primary mb-8 text-center'>
					About Me
				</h2>

				{/* TABS */}
				<div className='flex flex-col sm:flex-row justify-center items-center gap-3 p-4 mt-4 bg-gradient-to-r from-card via-card to-card/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/30'>
					<TabButton
						selectTab={() => handleTabChange('skills')}
						active={tab === 'skills'}
					>
						Skills
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange('education')}
						active={tab === 'education'}
					>
						Education
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange('experience')}
						active={tab === 'experience'}
					>
						Experience
					</TabButton>
				</div>

				<div className='min-h-80 p-6 xs:px-8 sm:px-12 mt-8 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/30 text-text-secondary font-normal leading-relaxed overflow-hidden'>
					<div className="relative z-10">
						{tabData[tab].content}
					</div>
					{/* Subtle background pattern */}
					<div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
