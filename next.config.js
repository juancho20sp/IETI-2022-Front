const path = require('path');

const withPWA = require('next-pwa')({

  dest: 'public',
  swSrc: 'service-worker.js',

});



/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [],
    additionalData: `
            @import "styles/config/_all.scss";
            @import "styles/components/_all.scss";
          `,
  }
});

module.exports = nextConfig;
