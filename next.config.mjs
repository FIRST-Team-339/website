/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/techbinder',
        destination: '/assets/docs/2026-Kilroy-Technical-Binder.pdf',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
