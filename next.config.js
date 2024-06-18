/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "dev.dominikraducki.pl",
        port: "1333",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
