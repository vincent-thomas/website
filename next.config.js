// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,

    removeConsole: {
      exclude: ["error", "warn", "log"],
    },
  },
  publicRuntimeConfig: {
    staticFolder: "/static",
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
  images: {
    domains: ["assets.v-thomas.me"],
  },
  trailingSlash: false,
  productionBrowserSourceMaps: true,
  compress: true,
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  basePath: "",
  useFileSystemPublicRoutes: true,
};

module.exports = nextConfig;
