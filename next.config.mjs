/** @type {import('next').NextConfig} */

import dotenvExpand from "dotenv-expand";

dotenvExpand.expand({ parsed: { ...process.env } });

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
