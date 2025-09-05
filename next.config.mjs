/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio',      // repo name
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true,          // disables Next.js image optimization for static export
  },
};

export default nextConfig;
