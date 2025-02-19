// NavLink Data
export const navLinkData = [
	{ title: 'About', path: '/#about' },
	{ title: 'Projects', path: '/projects' },
	{ title: 'Contact', path: '/#contact' },
];

// Tab Content Data
// Skills Data
const skillsList = [
	'C++, Python',
	'HTML, CSS, JavaScript, TypeScript',
	'React.js, Next.js, Redux, Remix',
	'Node.js, Express.js',
	'MongoDB, Mongoose, Firebase, GraphQL',
	'Git, GitHub',
	'Tailwind, Bootstrap',
];

// Education Data
const educationData = [
	{
		title: 'B.Tech CSE (2020-2024)',
		institution: 'Sarala Birla University, Ranchi',
		score: 'CGPA: 8.05',
	},
	{
		title: 'Class XII (2018-2019)',
		institution: 'Heritage International School, Chianki',
		score: 'Percentage: 91.6%',
	},
	{
		title: 'Class X (2016-2017)',
		institution: 'Rotary School, Chainpur',
		score: 'CGPA: 10.0',
	},
];

// Experience Data
const experienceData = [
	{
		title: 'NextJS Developer Intern (Sep 2024 - Present)',
		company: 'Debales AI',
		location: 'Remote',
	},
	{
		title: 'Web Developer Intern (May 2024 - June 2024)',
		company: 'VeriTech IT Software Services',
		location: 'Remote',
	},
];

// Tab Data
export const tabData = {
	skills: {
		title: 'Skills',
		content: (
			<ul className='space-y-2 pl-6 font-medium'>
				{skillsList.map((skill, index) => (
					<li
						key={index}
						className='list-disc transition-colors duration-200 hover:text-primary'
					>
						{skill}
					</li>
				))}
			</ul>
		),
	},
	education: {
		title: 'Education',
		content: (
			<dl className='space-y-6 pl-6'>
				{educationData.map((edu, index) => (
					<div key={index} className='group'>
						<dt className='list-disc font-semibold transition-colors duration-200 group-hover:text-primary'>
							{edu.title}
						</dt>
						<div className='mt-1 space-y-1 pl-4 text-sm text-secondary transition-colors duration-200 group-hover:text-primary'>
							<dd>→ {edu.institution}</dd>
							<dd>→ {edu.score}</dd>
						</div>
					</div>
				))}
			</dl>
		),
	},
	experience: {
		title: 'Experience',
		content: (
			<dl className='space-y-6 pl-6'>
				{experienceData.map((exp, index) => (
					<div key={index} className='group'>
						<dt className='list-disc font-semibold transition-colors duration-200 group-hover:text-primary'>
							{exp.title}
						</dt>
						<div className='mt-1 space-y-1 pl-4 text-sm text-secondary transition-colors duration-200 group-hover:text-primary'>
							<dd>→ {exp.company}</dd>
							<dd>→ {exp.location}</dd>
						</div>
					</div>
				))}
			</dl>
		),
	},
};

// Project Data
export const projectData = [
	{
		id: 6,
		title: 'Evento',
		description: 'A real-time event management platform.',
		features: [
			'Create and manage events with detailed information',
			'Real-time participant updates and live event status tracking',
			'Dynamic event categorization and filtering based on category/status',
			'User authentication with profile management and event history',
			'Image upload support via Cloudinary',
			'Push notifications for event updates',
			'Responsive design optimized for all devices',
			'Edit Profile functionality (for registered users)',
			'Guest access with limited features',
		],
		image: '/images/projects/evento1.png',
		images: [
			'/images/projects/evento1.png',
			'/images/projects/evento2.png',
			'/images/projects/evento3.png',
			'/images/projects/evento4.png',
			'/images/projects/evento5.png',
			'/images/projects/evento6.png',
		],
		techStack: 'MERN, Socket.IO, Cloudinary, JWT, Framer Motion, Tailwind',
		link: 'https://evento-olive.vercel.app/',
		github: 'https://github.com/RK-41/evento',
	},
	{
		id: 5,
		title: 'Task Manager',
		description: 'A web app to keep track of various tasks.',
		features: [
			'Seamless workflow to create, edit and delete tasks with ease.',
			'Mark/un-mark tasks for completion.',
			'Save tasks locally in the browser using local storage, allowing users to retain their tasks even after closing the app without needing an account.',
		],
		image: '/images/projects/taskManager1.png',
		images: [
			'/images/projects/taskManager1.png',
			'/images/projects/taskManager2.png',
			'/images/projects/taskManager3.png',
		],
		techStack: 'React.js, Tailwind',
		link: 'https://task-manager-five-jade.vercel.app/',
		github: 'https://github.com/RK-41/task-manager',
	},
	{
		id: 4,
		title: 'CineFlix',
		description: 'Database for cinema related contents.',
		features: [
			'Integration of TMDB API, a comprehensive database of cinematic content.',
			'Search functionality.',
			'Sidebar listing various genres to go discover contents.',
			'Dedicated details page with embedded trailers, clips and other reccomendations.',
			'Note: Use of VPN is recommended as TMDB API is blocked in some regions.',
		],
		image: '/images/projects/cineFlix1.png',
		images: [
			'/images/projects/cineFlix1.png',
			'/images/projects/cineFlix2.png',
			'/images/projects/cineFlix3.png',
			'/images/projects/cineFlix4.png',
			'/images/projects/cineFlix5.png',
			'/images/projects/cineFlix6.png',
		],
		techStack: 'HTML, CSS, JavaScript, TMDB API',
		link: 'https://main--cineflixwebsite.netlify.app/',
		github: 'https://github.com/RK-41/vsis-internship-task4',
	},
	{
		id: 3,
		title: 'NotesMaster',
		description: 'A web app for taking notes.',
		features: [
			'Seamless workflow to create, edit and delete notes with ease.',
			'Authentication with Sign-in and Sign-up options implemented using Clerk.',
			'Dual theme - Light & Dark.',
		],
		image: '/images/projects/notesMaster1.png',
		images: [
			'/images/projects/notesMaster1.png',
			'/images/projects/notesMaster2.png',
			'/images/projects/notesMaster3.png',
			'/images/projects/notesMaster4.png',
		],
		techStack: 'Next.js, MongoDB, Tailwind',
		link: 'https://notes-master-iota.vercel.app/',
		github: 'https://github.com/RK-41/notes-master',
	},
	{
		id: 2,
		title: 'Dig-IT',
		description: 'Website for a digital service provider agency.',
		features: [
			'Meeting scheduling through Calendly.',
			'Showcases a list of satisfied customers through a slider.',
			'Listing of various services provided by the agency.',
			'Interactive FAQ section built using React Accordion.',
			'Dedicated Contact page to receive massages/queries through mail.',
			'Dedicated Pricing page having multiple subscription plans.',
			'Implementation of Stripe payment gateway for seamless subscription plan purchases.',
		],
		image: '/images/projects/digIT1.png',
		images: [
			'/images/projects/digIT1.png',
			'/images/projects/digIT2.png',
			'/images/projects/digIT3.png',
			'/images/projects/digIT4.png',
			'/images/projects/digIT5.png',
		],
		techStack: 'Next.js, Tailwind',
		link: 'https://dig-it-eta.vercel.app/',
		github: 'https://github.com/RK-41/dig-it',
	},
	{
		id: 1,
		title: 'ShopWay',
		description: 'E-commerce website with end-to-end functionalities.',
		features: [
			'Authentication with Sign-in and Sign-up options.',
			'Admin account control.',
			'User account control.',
			'Display of top products through a slider.',
			'Robust search functionality.',
			'Dedicated product details page.',
			'Cart management with item count change and item deletion features.',
			'Multiple payment methods implemented using Stripe.',
		],
		image: '/images/projects/shopWay1.png',
		images: [
			'/images/projects/shopWay1.png',
			'/images/projects/shopWay2.png',
			'/images/projects/shopWay3.png',
			'/images/projects/shopWay4.png',
			'/images/projects/shopWay5.png',
			'/images/projects/shopWay6.png',
			'/images/projects/shopWay7.png',
		],
		techStack: 'MERN, Redux, Bootstrap',
		link: 'https://shopway-aw74.onrender.com/',
		github: 'https://github.com/RK-41/shopway',
	},
];
