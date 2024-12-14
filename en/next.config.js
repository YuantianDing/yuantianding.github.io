/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,
  output: 'export',

  images: {
    unoptimized: true,
    // domains: [
    //   'res.cloudinary.com',
    // ],
  },
  // SVGR
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
