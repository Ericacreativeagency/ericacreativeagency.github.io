import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Required for static export to work correctly on GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/erica-creative-portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/erica-creative-portfolio' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
