import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages / Vercel static hosting
  output: 'export',
  
  // Configure images for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
