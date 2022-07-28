// @ts-check

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ["error", "warn", "log", "*"]
    }
  },
  cleanDistDir: true,
  compress: true,
  poweredByHeader: false,
  optimizeFonts: true,
  swcMinify: true,
  experimental: {
    serverComponents: true
  },
  trailingSlash: false,
  productionBrowserSourceMaps: true,
  basePath: "",
  useFileSystemPublicRoutes: true
};
export default config;
