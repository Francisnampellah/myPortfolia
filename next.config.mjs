/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // loader: "custom",
    // loaderFile: "./loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
