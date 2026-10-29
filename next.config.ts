import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'picsum.photos' }],
    dangerouslyAllowSVG: false,
  },
};
export default config;
