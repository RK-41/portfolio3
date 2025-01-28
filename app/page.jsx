'use client';
import AboutSection from './components/AboutSection';
import EmailSection from './components/EmailSection';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-bg-primary'>
			<div className='container mx-auto px-12 py-4'>
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<EmailSection />
			</div>
		</main>
	);
}
