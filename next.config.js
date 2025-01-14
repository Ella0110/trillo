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
      },
      {
        protocol: 'https',
        hostname: 'www.bring-you.info'
      },
      {
        protocol: 'https',
        hostname: 'content.skyscnr.com'
      },
      {
        protocol: 'https',
        hostname: 'inafarawayland.com'
      },
      {
        protocol: 'https',
        hostname: 'www.newzealandscapes.co.nz'
      },
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com'
      },
      {
        protocol: 'https',
        hostname: 'www.cathaypacific.com'
      },
      {
        protocol: 'https',
        hostname: 'thehkhub.com'
      }

    ],
  },
  basePath: ''
}