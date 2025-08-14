
// next.config.js (veya app/layout.tsx gibi entry dosyasına eklenebilir)
if (process.env.PORT === "3000") {
  throw new Error("Bu proje 3000 portunda çalıştırılamaz. Lütfen farklı bir port kullanın (örneğin 3001).");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/v1/catalog/services',
        destination: 'https://www.wixapis.com/bookings/v1/catalog/services',
      },
    ];
  },
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {},
  eslint: {
    dirs: ['app', 'src'],
  },
  images: {
    domains: ['fakeimg.pl', 'static.wixstatic.com', 'fonts.cdnfonts.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
