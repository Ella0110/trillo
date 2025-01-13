/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-tc.galaxy.tf'
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com'
      },
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com'
      }
    ],
  },
  basePath: ''
}