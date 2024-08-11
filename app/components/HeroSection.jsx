import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<section>
			<div className='grid grid-cols-1 sm:grid-cols-12 mt-16'>
				<div className='col-span-7 place-self-center text-center sm:text-left'>
					<h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-bold sm:font-extrabold'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>
							Hello, I'm{' '}
						</span>
						<br />
						<TypeAnimation
							sequence={['Rajan Kumar', 2000, 'Web Developer', 2000]}
							wrapper='span'
							speed={10}
							style={{ fontSize: '1em', display: 'inline-block' }}
							repeat={Infinity}
						/>
					</h1>
					<p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
						I specializing in creating responsive, user-friendly and interactive
						websites &amp; web-apps.
					</p>

					<div>
						<button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>
							<Link href='#contact'>Hire Me</Link>
						</button>
						<button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent  hover:bg-slate-800 text-white border border-white mt-3'>
							<Link
								href='https://drive.google.com/file/d/1zTzQqVFEcgcHFp2CC-_tIt2cdYNf5z4B/view?usp=sharing'
								target='_blank'
							>
								Download CV
							</Link>
						</button>
					</div>
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
		</section>
	);
};

export default HeroSection;
