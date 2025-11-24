import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: [
      "images.pexels.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "images.pexels.com",
    ],
  },
};

export default nextConfig;
