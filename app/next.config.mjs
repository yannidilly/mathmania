/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  async headers() {
    return [
      { 
        source: '/login',
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          }
        ]
      }
    ]
  }
}

export default nextConfig
