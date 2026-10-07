import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * The USA / UK / Australia / Pakistan location pages were retired — they chased
   * "freelance web developer <country>", a phrase with heavy competition and
   * almost no buying intent. Anyone (or any crawler) still holding those URLs
   * gets sent to the services page rather than a 404, so no link equity is lost.
   */
  async redirects() {
    return [
      { source: "/web-developer-usa", destination: "/services", permanent: true },
      { source: "/web-developer-uk", destination: "/services", permanent: true },
      { source: "/web-developer-australia", destination: "/services", permanent: true },
      { source: "/web-developer-pakistan", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
