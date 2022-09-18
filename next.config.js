const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [
      // path.join(__dirname, 'styles/config/_all.scss'),
      path.join(__dirname, 'styles/components'),
    ],
    additionalData: `
            @import "styles/config/_all.scss";
          `,
  },
};

module.exports = nextConfig;
