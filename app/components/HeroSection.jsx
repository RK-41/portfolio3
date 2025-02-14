import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
	return (
		<section className='min-h-[calc(100vh-80px)]'>
			<div className='grid grid-cols-1 md:grid-cols-12 mt-16'>
				<div className='col-span-7 place-self-center text-center sm:text-left'>
					<h1 className='mb-4 text-4xl sm:text-4xl lg:text-6xl font-bold sm:font-extrabold'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>
							Hello, I'm{' '}
						</span>
						<br />
						<TypeAnimation
							sequence={['Rajan Kumar', 2000, 'Web Developer', 2000]}
							wrapper='span'
							speed={10}
							style={{
								fontSize: '1em',
								display: 'inline-block',
								color: 'inherit',
							}}
							repeat={Infinity}
							className='text-primary'
						/>
					</h1>
					<p className='text-text-secondary text-base sm:text-lg sm:mt-8 lg:text-xl'>
						Results-driven Full-Stack Developer specializing in Next.js, React,
						TypeScript, Node.js, and MongoDB. Passionate about building scalable
						applications, implementing robust backend solutions, and delivering
						exceptional user experiences.
					</p>
				</div>

				<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
					<div className='rounded-full shadow-xl shadow-black w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] relative'>
						<Image
							src='/images/RK.png'
							alt='dev image'
							// className='absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
							width={400}
							height={400}
						/>
					</div>
				</div>
			</div>

			<div className='mt-8 flex flex-col items-center md:items-start justify-center gap-4'>
				<div className='font-semibold'>
					<button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 text-white transition-all duration-300'>
						<Link href='#contact'>Hire Me</Link>
					</button>
					<button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-text-primary hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 border border-blue-500 mt-3 md:mt-0 transition-[background] duration-300'>
						<Link
							href='https://drive.google.com/file/d/1NsQgdwF016jPNl-UTYYEc6lKfnVBEKq1/view?usp=sharing'
							target='_blank'
						>
							View Resume
						</Link>
					</button>
				</div>
				<SocialLinks className='mt-2 sm:mt-4 justify-center sm:justify-start' />
			</div>
		</section>
	);
};

export default HeroSection;
