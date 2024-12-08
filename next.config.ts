import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**yt3.ggpht.com',
        // pathname: '/ytc/**', // YouTube 썸네일 경로 패턴
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        // pathname: '/**', // YouTube 이미지의 다른 경로 패턴
      },
    ],
  },
};

export default nextConfig;
