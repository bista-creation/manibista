import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 84, 86],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920, 2560],
    imageSizes: [64, 96, 128, 256, 384, 512, 640, 750],
  },
};

export default nextConfig;
