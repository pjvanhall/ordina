/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/currentweather",
          permanent: true,
        },
      ];
    },
  };

export default nextConfig;
