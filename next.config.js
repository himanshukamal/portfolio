/** @type {import('next').NextConfig} */
// const withImages = require("next-images");
// const withOptimizedImages = require("next-optimized-images");

// module.exports = withImages(
//   withOptimizedImages({
//     images: {
//       domains: ["pixabay.com"],
//     },
//   })
// );
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pixabay.com"],
  },
};

module.exports = nextConfig;
