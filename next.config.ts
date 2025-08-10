import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
      domains: ['translate.google.com'],
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
