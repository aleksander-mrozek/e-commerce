/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "naszsklep-api.vercel.app",
      "picsum.photos",
      "media.graphassets.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    return config;
  },
};

module.exports = nextConfig;
