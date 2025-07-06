/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    SITE_URL: 'https://renierquer.com',
    SITE_NAME: 'Renier Quer - Arqueólogo Visual',
  },
}

module.exports = nextConfig