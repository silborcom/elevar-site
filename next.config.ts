import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // A antiga rota /projetos virou a SEC.05 da home; URLs publicadas seguem válidas.
      { source: "/projetos", destination: "/#projetos", permanent: true },
    ];
  },
};

export default nextConfig;
