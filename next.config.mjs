/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.shopify.com',
            port: '',
            pathname: '/s/files/**',
          },
        ],
      },

};

export default nextConfig;
// https://cdn.shopify.com/s/files/1/0605/0555/5177/files/MondayMorning_1_1445x_1.png?v=1709661900