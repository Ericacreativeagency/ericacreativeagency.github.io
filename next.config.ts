import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // CRUCIAL: Ensures a clean, static build (HTML/CSS/JS) is produced in the 'out' folder.
  output: 'export',
  // Required for static export compatibility.
  images: {
    unoptimized: true,
  },
  // basePath is omitted for your .github.io root-level site.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
