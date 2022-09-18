const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [ ],
    additionalData: `
            @import "styles/config/_all.scss";
            @import "styles/components/_all.scss";
          `,
  },
};

module.exports = nextConfig;
