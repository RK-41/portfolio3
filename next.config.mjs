/** @type {import('next').NextConfig} */

module.exports = {
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

module.exports = {
	basePath: '/portfolio3',
	assetPrefix: '/portfolio3/',
};

const nextConfig = {
	output: 'export',
};

export default nextConfig;
