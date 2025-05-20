/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['enovathemes.com', 'source.unsplash.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'enovathemes.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'source.unsplash.com', port: '', pathname: '/**' },
    ],
  },
}

export default nextConfig