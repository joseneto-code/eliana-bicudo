/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/eliana-bicudo' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/eliana-bicudo/' : undefined,
  trailingSlash: true,
}

export default nextConfig
