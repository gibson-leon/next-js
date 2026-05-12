/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['ik.imagekit.io'],
  },
  async redirects() {
    return [
      // {
      //   source: "/blog",
      //   destination: "/about",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;