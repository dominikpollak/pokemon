/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "raw.githubusercontent.com",
        port : '',
        pathname: '/PokeAPI/sprites/master/sprites/**/*',
      },
    ],
  },
  experimental:{appDir: true},
  reactStrictMode: true,
  concurrentFeatures: true,
}
