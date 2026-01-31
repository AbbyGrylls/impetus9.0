/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // When user visits /api/anything...
        destination: 'http://13.53.38.144:5000/api/:path*' // ...send them here secretly
      }
    ]
  }
};

export default nextConfig;