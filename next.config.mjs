/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**", // Matches any path under this hostname
      },
    ],
  },
};

export default nextConfig;
