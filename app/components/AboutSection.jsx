'use client';

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const tabData = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className='list-disc pl-4'>
				<li>C++, Python</li>
				<li>HTML, CSS, JavaScript, TypeScript</li>
				<li>React.js, Next.js, Redux</li>
				<li>Node.js, Express.js</li>
				<li>MongoDB, Mongoose, Firebase</li>
				<li>Git, GitHub</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<dl className='pl-4'>
				<div className='flex flex-col'>
					<dt className='list-item list-disc font-normal'>
						B.Tech CSE (2020-2024)
					</dt>
					<div>
						<dd>→ Sarala Birla University, Ranchi</dd>
						<dd>→ CGPA: 8.05</dd>
					</div>
				</div>
				<br />
				<div className='flex flex-col'>
					<dt className='list-item list-disc font-normal'>
						Class XII (2018-2019)
					</dt>
					<div>
						<dd>→ Heritage International School, Chianki</dd>
						<dd>→ Percentage: 91.6%</dd>
					</div>
				</div>
				<br />
				<div className='flex flex-col'>
					<dt className='list-item list-disc font-normal'>
						Class X (2016-2017)
					</dt>
					<div>
						<dd>→ Rotary School, Chainpur</dd>
						<dd>→ CGPA: 10.0</dd>
					</div>
				</div>
			</dl>
		),
	},

	{
		title: 'Experience',
		id: 'experience',
		content: (
			<dl className='pl-4'>
				<div className='flex flex-col'>
					<dt className='list-item list-disc font-normal'>
						Web Developer Intern (May 2024 - June 2024)
					</dt>
					<div>
						<dd>→ VeriTech IT Software Services</dd>
						<dd>→ Remote</dd>
					</div>
				</div>
			</dl>
		),
	},
];

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
				<h2 className='text-3xl sm:text-4xl font-bold text-white mb-4 text-center'>
					About Me
				</h2>

				{/* TABS */}
				<div className='flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 text-lg sm:text-xl rounded-lg shadow-lg p-4 shadow-black'>
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
				<div className='h-max min-h-80 p-4 md:px-12 mt-8 rounded-lg shadow-xl font-light leading-relaxed  shadow-black'>
					{tabData.find((t) => t.id === tab).content}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
