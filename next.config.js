/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
      },
    ],
  },
  reactCompiler: true,
};

module.exports = nextConfig;
