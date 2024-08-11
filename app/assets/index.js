// NavLink Data
export const navLinkData = [
	{ title: 'About', path: '/#about' },
	{ title: 'Projects', path: '/#projects' },
	{ title: 'Contact', path: '/#contact' },
];

// Tab Data
export const tabData = [
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

// Project Data
export const projectData = [
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
		techStack: 'React.js, Tailwind',
		link: 'https://task-manager-five-jade.vercel.app/',
		github: 'https://github.com/RK-41/task-manager',
	},
	{
		id: 4,
		title: 'Cine Flix',
		description: 'Database for cinema related contents.',
		features: [
			'A comprehensive database of cinematic content.',
			'Search functionality.',
			'Sidebar listing various genres to go discover contents.',
			'Dedicated details page with embedded trailers, clips and other reccomendations.',
		],
		image: '/images/projects/cineFlix1.png',
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
		techStack: 'Next.js, MongoDB, Tailwind',
		link: 'https://notes-master-iota.vercel.app/',
		github: 'https://github.com/RK-41/notes-master',
	},
	{
		id: 2,
		title: 'Dig IT',
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
		techStack: 'MERN, Bootstrap',
		link: 'https://shopway-aw74.onrender.com/',
		github: 'https://github.com/RK-41/shopway',
	},
];
