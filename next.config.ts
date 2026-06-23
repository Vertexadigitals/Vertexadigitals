import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/resources/blogs",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/resources/blogs",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/resources/case-studies",
        permanent: true,
      },
      {
        source: "/work/:path*",
        destination: "/resources/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
