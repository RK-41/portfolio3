/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				xs: '512px',
			},
			colors: {
				primary: 'var(--primary)',
				'primary-hover': 'var(--primary-hover)',
				'bg-primary': 'var(--background-primary)',
				'bg-secondary': 'var(--background-secondary)',
				'text-primary': 'var(--text-primary)',
				'text-secondary': 'var(--text-secondary)',
				'primary-text': 'var(--primary-text)',
				'secondary-text': 'var(--secondary-text)',
				input: 'var(--input-bg)',
				'input-border': 'var(--input-border)',
				'input-placeholder': 'var(--input-placeholder)',
				'input-text': 'var(--input-text)',
				button: 'var(--button-bg)',
				'button-hover': 'var(--button-hover)',
				'button-text': 'var(--button-text)',
				leetcode: 'var(--leetcode-bg)',
				'leetcode-hover': 'var(--leetcode-hover)',
				gfg: 'var(--gfg-bg)',
				'gfg-hover': 'var(--gfg-hover)',
				discord: 'var(--discord-bg)',
				'discord-hover': 'var(--discord-hover)',
				github: 'var(--github-bg)',
				'github-hover': 'var(--github-hover)',
				linkedin: 'var(--linkedin-bg)',
				'linkedin-hover': 'var(--linkedin-hover)',
				background: 'var(--background-primary)',
			},
			backgroundColor: {
				card: 'var(--card-background)',
				navbar: 'var(--navbar-background)',
			},
			textColor: {
				navbar: 'var(--navbar-text)',
			},
			borderColor: {
				default: 'var(--border-color)',
			},
		},
	},
	plugins: [],
};
