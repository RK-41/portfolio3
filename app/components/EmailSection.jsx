import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import {
	SiGithub,
	SiLinkedin,
	SiDiscord,
	SiLeetcode,
	SiGeeksforgeeks,
} from 'react-icons/si';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLinks from './SocialLinks';
import { useTheme } from './ThemeProvider';

const EmailSection = () => {
	const [loading, setLoading] = useState(false);
	const { theme } = useTheme();

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
			className='grid md:grid-cols-2 mt-6 md:mt-12 py-12 gap-4 scroll-mt-10'
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
					theme={theme === 'dark' ? 'dark' : 'light'}
				/>
			</div>

			<div className='mb-4'>
				<h2 className='text-3xl sm:text-4xl font-bold text-primary-text mb-4'>
					Let's Connect
				</h2>
				<p className='text-secondary-text mb-4 max-w-md'>
					I'm open to new opportunities and always eager to connect. Whether you
					have a question or just want to say hello, feel free to reach out —
					I&apos;ll do my best to respond promptly!
				</p>

				<SocialLinks className='mt-8' />
			</div>

			<div>
				<form onSubmit={handleSubmit} className='flex flex-col gap-6'>
					<label
						htmlFor='name'
						className='text-primary-text block text-sm font-medium'
					>
						Your Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						placeholder='Your Name'
						className='bg-input border border-input-border placeholder-input-placeholder text-input-text text-sm rounded-lg block w-full p-2.5'
					/>

					<label
						htmlFor='email'
						className='text-primary-text block text-sm font-medium'
					>
						Your Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						required
						placeholder='rk@gmail.com'
						className='bg-input border border-input-border placeholder-input-placeholder text-input-text text-sm rounded-lg block w-full p-2.5'
					/>

					<label
						htmlFor='message'
						className='text-primary-text block text-sm font-medium'
					>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						required
						className='bg-input border border-input-border placeholder-input-placeholder text-input-text text-sm rounded-lg block w-full p-2.5'
						placeholder="Let's talk about..."
					/>

					<button
						type='submit'
						disabled={loading}
						className='text-button-text bg-button hover:bg-button-hover font-medium py-2.5 rounded-lg w-full'
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
