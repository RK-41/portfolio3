import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailSection = () => {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);

		const formData = {
			name: event.target.name.value,
			email: event.target.email.value,
			message: event.target.message.value,
		};

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (!res.ok) {
				toast.error('Something went wrong. Please try again.');
				// throw new Error('Something went wrong');
			} else {
				toast.success('Message received successfully!');
				event.target.reset();
			}
		} catch (error) {
			console.error('Error submitting the form:', error);
			toast.error('Failed to send the message. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			className='grid md:grid-cols-2 mt-4 md:mt-6 py-12 gap-4 scroll-mt-10'
			id='contact'
		>
			<div className='absolute'>
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='dark'
				/>
			</div>

			<div className='mb-4'>
				<h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
					Let's Connect
				</h2>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
					I'm currently looking for new opportunities, my inbox is always open.
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
						htmlFor='name'
						className='text-white block text-sm font-medium'
					>
						Your Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						placeholder='Your Name'
						className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
					/>

					<label
						htmlFor='email'
						className='text-white block text-sm font-medium'
					>
						Your Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						required
						placeholder='rk@gmail.com'
						className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
					/>

					<label
						htmlFor='message'
						className='text-white block text-sm font-medium'
					>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						required
						className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
						placeholder="Let's talk about..."
					/>

					<button
						type='submit'
						disabled={loading}
						className='bg-blue-600 hover:bg-blue-700 font-medium py-2.5 rounded-lg w-full'
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
