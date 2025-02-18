import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["shadcn-ui"],
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 86400,
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
