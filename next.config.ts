import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ['payload', 'drizzle-kit', 'esbuild'],
};

export default nextConfig;
