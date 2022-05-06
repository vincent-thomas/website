/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  cleanDistDir: true,
  compress: true,
  distDir: "dist",
  swcMinify: true,
  poweredByHeader: false,
  optimizeFonts: true,
  experimental: {
    optimizeCss: true,
    runtime: "edge",
    images: {
      layoutRaw: true,
    },
  },
};

module.exports = nextConfig;
