// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.publicdomainpictures.net",
        pathname: "/**",
      },

      // ⭐ Added from your blogPosts list:
      {
        protocol: "https",
        hostname: "www.write-right.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pfecglobal.com.bd",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "consignerglobal.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
