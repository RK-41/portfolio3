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
					<dt className='list-item list-disc'>B.Tech CSE (2020-2024)</dt>
					<div>
						<dd>Sarala Birla University, Ranchi</dd>
						<dd>CGPA: 8.05</dd>
					</div>
				</div>
				<br />
				<div className='flex flex-col'>
					<dt className='list-item list-disc'>Class XII (2018-2019)</dt>
					<div>
						<dd>Heritage International School, Chianki</dd>
						<dd>Percentage: 91.6%</dd>
					</div>
				</div>
				<br />
				<div className='flex flex-col'>
					<dt className='list-item list-disc'>Class X (2016-2017)</dt>
					<div>
						<dd>Rotary School, Chainpur</dd>
						<dd>CGPA: 10.0</dd>
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
					<dt className='list-item list-disc'>
						Web Developer Intern (May 2024 - June 2024)
					</dt>
					<div>
						<dd>VeriTech IT Software Services</dd>
						<dd>Remote</dd>
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
		<section className='text-white' id='about'>
			<div className='md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/about-img.jpg'
					alt='about image'
					width={500}
					height={500}
					className='rounded-xl'
				/>

				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>

					{/* TABS */}
					<div className='flex flex-row mt-8 text-xl'>
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
					<div className='mt-8'>
						{tabData.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
