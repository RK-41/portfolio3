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
		<section className='text-white my-16' id='about'>
			<div className='py-8 sm:px-4 sm:py-12 xl:px-16 '>
				<h2 className='text-3xl sm:text-4xl font-bold text-white mb-8 text-center'>
					About Me
				</h2>

				{/* TABS */}
				<div className='flex flex-col sm:flex-row justify-center items-center gap-2 p-4 mt-4 text-lg sm:text-xl bg-[#181818] rounded-xl shadow-lg shadow-black'>
					<TabButton
						selectTab={() => handleTabChange('skills')}
						active={tab === 'skills'}
					>
						{' '}
						Skills{' '}
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange('education')}
						active={tab === 'education'}
					>
						{' '}
						Education{' '}
					</TabButton>
					<TabButton
						selectTab={() => handleTabChange('experience')}
						active={tab === 'experience'}
					>
						{' '}
						Experience{' '}
					</TabButton>
				</div>
				<div className='h-max min-h-80 p-4 md:px-12 mt-8 bg-[#181818] rounded-xl shadow-xl shadow-black font-light leading-relaxed'>
					{tabData.find((t) => t.id === tab).content}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
