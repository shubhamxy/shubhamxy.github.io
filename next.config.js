/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/tracker",
  //       destination: "https://t.shubm.me/",
  //       permanent: true,
  //     },
  //     {
  //       source: "/newsletter",
  //       destination: "https://news.shubm.me/",
  //       permanent: true, // Set this to false if you want a temporary redirect
  //     },
  //     {
  //       source: "/life",
  //       destination: "https://blog.shubm.me/",
  //       permanent: true,
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "/life/:path*",
  //       has: [{ type: "host", value: "life.shubm.me" }],
  //     },
  //     {
  //       // fallback
  //       source: "/:path*",
  //       destination: "/life/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
