/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.bartleby.com",
      },
      {
        protocol: "https",
        hostname: "www.researchgate.net",
      },
    ],
  },
};

export default nextConfig;
