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
      {
        protocol: "https",
        hostname: "westernsydney.org.au",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.cntraveller.com",
        pathname: "/**",
      },

      // ⭐ New from destinations[]
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.rayburntours.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a.travel-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.contentstack.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lp-cms-production.imgix.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "platform.edu.np",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
