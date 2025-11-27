import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/blog/:path*",
        destination: "https://blog.designpi.com/:path*",
        permanent: true,
      },
    ];
  },
};
