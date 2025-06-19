/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/curriculum',
        destination: '/curriculum',
        permanent: true,
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.gstatic.com https://docs.google.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; img-src 'self' data: https://docs.google.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; connect-src 'self' https://api.openai.com; frame-src https://docs.google.com https://drive.google.com;"
          }
        ]
      }
    ]
  },
  env: {
    API_URL: process.env.API_URL || 'https://api.tota.ai/v3'
  }
}

module.exports = nextConfig
