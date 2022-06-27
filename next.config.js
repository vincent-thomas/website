// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,

    removeConsole: {
      exclude: ["error", "warn", "log", "*"]
    }
  },

  cleanDistDir: true,
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  optimizeFonts: true,

  images: {
    domains: ["assets.v-thomas.me"]
  },
  trailingSlash: false,
  productionBrowserSourceMaps: true,
  typescript: {
    tsconfigPath: "./tsconfig.json"
  },

  basePath: "",
  useFileSystemPublicRoutes: true
};

module.exports = nextConfig;
