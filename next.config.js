/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        // port: '',
        pathname: '**',
      },
    ],
    // domains: ['media.graphassets.com'],
  },
}

module.exports = nextConfig
