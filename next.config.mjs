/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export',
	basePath: '/portfolio3',
	assetPrefix: '/portfolio3/',
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Permissions-Policy',
						value: 'interest-cohort=()',
					},
				],
			},
		];
	},
};

export default nextConfig;
