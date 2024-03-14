/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/catalog": { page: "/catalog" },
      // "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
    };
  },
};

module.exports = nextConfig;
