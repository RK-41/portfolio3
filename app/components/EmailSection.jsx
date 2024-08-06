import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const EmailSection = () => {
	const handleSubmit = async (data) => {
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				throw new Error('Something went wrong');
			}

			setSubmitted(true);
		} catch (error) {
			throw new Error('Something went wrong');
		}
	};

	return (
		<section
			className='grid md:grid-cols-2 my-8 md:my-12 py-24 gap-4'
			id='contact'
		>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>

			<div className='z-10'>
				<h2 className='text-4xl font-bold text-white my-4'>Let's Connect</h2>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
					{' '}
					I'm currenctly looking for new opportunities, my inbox in always open.
					Whether you have a question or just want to say hi, I'll try my best
					to get back to you as soon as possible!
				</p>

				<div className='socials flex flex-row gap-2 text-3xl'>
					<Link href='https://github.com/RK-41' target='_blank'>
						<FaGithub />
					</Link>
					<Link
						href='https://www.linkedin.com/in/rajankumar1124'
						target='_blank'
					>
						<FaLinkedin />
					</Link>
				</div>
			</div>

			<div>
				<form onSubmit={handleSubmit} className='flex flex-col gap-6'>
					<label
						htmlFor='email'
						className='text-white block text-sm font-medium'
					>
						Your Email
					</label>
					<input
						type='email'
						id='email'
						required
						placeholder='rk@gmail.com'
						className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
					/>

					<label
						htmlFor='subject'
						className='text-white block text-sm font-medium'
					>
						Subject
					</label>
					<input
						type='text'
						id='subject'
						required
						placeholder='Just saying hi.'
						className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
					/>

					<label
						htmlFor='message'
						className='text-white block text-sm font-medium'
					>
						Message
					</label>
					<textarea
						name='message'
						id='message'
						className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
						placeholder="Let's talk about..."
					/>

					<button
						type='submit'
						className='bg-purple-500 hover:bg-purple-600 font-medium py-2.5 rounded-lg w-full'
					>
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
