import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aeizei.com",
      },
      {
        protocol: "https",
        hostname: "lp2.hm.com",
      },
      {
        protocol: "https",
        hostname: "www.dior.com",
      },
      {
        protocol: "https",
        hostname: "fereclaurus.com",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
