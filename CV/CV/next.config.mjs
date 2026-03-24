/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/resume',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
