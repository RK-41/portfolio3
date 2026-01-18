import Link from "next/link";

// NavLink Data
export const navLinkData = [
  { title: 'About', path: '/#about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/#contact' },
];

// Tab Content Data
// Skills Data
const skillsList = [
  'C, C++, Python, Java',
  'HTML, CSS, JavaScript, TypeScript',
  'React.js, Next.js, Remix, React Native, Redux',
  'Node.js, Express.js',
  'MongoDB, Mongoose, Firebase, GraphQL',
  'Git, GitHub, Expo, Postman, Vercel',
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
    title: 'Frontend Developer (Apr 2025 - Present)',
    company: 'RSVR Technologies',
    location: 'Remote',
    link: 'https://www.rsvrtech.com',
    description: ''
  },
  {
    title: 'NextJS Developer Intern (Sep 2024 - Apr 2025)',
    company: 'Debales AI',
    location: 'Remote',
    link: 'https://debales.ai',
    description: ''
  },
];

// Tab Data
export const tabData = {
  skills: {
    title: 'Skills',
    content: (
      <div className='grid gap-2 sm:gap-4'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
            <span className='text-white text-sm font-bold'>💻</span>
          </div>
          <h3 className='text-xl font-semibold text-text-primary'>Technical Skills</h3>
        </div>
        <div className='grid lg:grid-cols-2 gap-3'>
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className='group relative bg-gradient-to-r from-card to-transparent border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.01] hover:border-primary/30'
            >
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-primary rounded-full group-hover:scale-115 transition-transform duration-200'></div>
                <span className='font-medium text-text-secondary group-hover:text-primary transition-colors duration-200'>
                  {skill}
                </span>
              </div>
              <div className='absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  education: {
    title: 'Education',
    content: (
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-6'>
          <div className='w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center'>
            <span className='text-white text-sm font-bold'>🎓</span>
          </div>
          <h3 className='text-xl font-semibold text-text-primary'>Educational Background</h3>
        </div>
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent'></div>
          
          {educationData.map((edu, index) => (
            <div key={index} className='relative flex gap-2 sm:gap-4 md:gap-6 pb-4 last:pb-0 group'>
              {/* Timeline dot */}
              <div className='relative z-10 w-12 h-12 bg-card border-4 border-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg'>
                <div className='w-3 h-3 bg-primary rounded-full group-hover:bg-white transition-colors duration-200'></div>
              </div>
              
              {/* Content card */}
              <div className='flex-1 bg-gradient-to-br from-card to-card/80 border border-gray-200 dark:border-gray-700 rounded-xl p-6 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300 group-hover:scale-[1.01] group-hover:border-primary/30'>
                <h4 className='text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200'>
                  {edu.title}
                </h4>
                <div className='space-y-2'>
                  <div className='flex items-center gap-2 text-text-secondary'>
                    <span className='w-1.5 h-1.5 bg-primary rounded-full'></span>
                    <span className='font-medium'>{edu.institution}</span>
                  </div>
                  <div className='flex items-center gap-2 text-text-secondary'>
                    <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
                    <span className='font-semibold text-green-600 dark:text-green-400'>{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  experience: {
    title: 'Experience',
    content: (
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-6'>
          <div className='w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center'>
            <span className='text-white text-sm font-bold'>💼</span>
          </div>
          <h3 className='text-xl font-semibold text-text-primary'>Professional Experience</h3>
        </div>
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent'></div>
          
          {experienceData.map((exp, index) => (
            <div key={index} className='relative flex gap-2 sm:gap-4 md:gap-6 pb-4 last:pb-0 group'>
              {/* Timeline dot */}
              <div className='relative z-10 w-12 h-12 bg-card border-4 border-primary rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-lg'>
                <div className='w-3 h-3 bg-primary rounded-full group-hover:bg-white transition-colors duration-200'></div>
              </div>
              
              {/* Content card */}
              <div className='flex-1 bg-gradient-to-br from-card to-card/80 border border-gray-200 dark:border-gray-700 rounded-xl p-6 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300 group-hover:scale-[1.01] group-hover:border-primary/30'>
                <h4 className='text-lg font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-200'>
                  {exp.title}
                </h4>
                <div className='space-y-3'>
                  <div className='flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 bg-primary rounded-full'></span>
                    <Link 
                      href={exp.link} 
                      className="font-medium text-blue-600 dark:text-blue-400 hover:text-primary hover:underline transition-colors duration-200 flex items-center gap-1" 
                      target="_blank"
                    >
                      {exp.company}
                      <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                      </svg>
                    </Link>
                  </div>
                  <div className='flex items-center gap-2 text-text-secondary'>
                    <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
                    <span className='font-medium'>{exp.location}</span>
                  </div>
                  {index === 0 && (
                    <div className='mt-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full inline-block'>
                      Current Position
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
    id: 7,
    title: 'GitHub Profile Analyzer',
    description: 'Get insights into GitHub user profiles.',
    features: [
      '🔍 Instant GitHub user profile search',
      '📊 Interactive contribution heatmap with year selection',
      '📚 Repository listing with stars and fork counts',
      '🎨 Modern UI with smooth interactions',
      '📱 Fully responsive design',
    ],
    image: '/images/projects/githubProfiler1.png',
    images: [
      '/images/projects/githubProfiler1.png',
      '/images/projects/githubProfiler2.png',
    ],
    techStack: 'React, GitHub GraphQL and REST APIs, React Calendar Heatmap, Shadcn UI, TypeScript',
    link: 'https://github-profiler-psi.vercel.app/',
    github: 'https://github.com/RK-41/github-profiler',
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
    techStack: 'React.js, Tailwind, TypeScript',
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
    techStack: 'Next.js, MongoDB, Tailwind, TypeScript',
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
    techStack: 'Next.js, Tailwind, TypeScript',
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
