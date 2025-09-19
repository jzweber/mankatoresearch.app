import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   // Where Next.js puts the build output
  distDir: 'build',

  // Enable standalone build for easier deployment
  output: 'standalone',
};

export default nextConfig;
