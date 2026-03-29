/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — generates an `out/` directory ready for S3 + CloudFront
  output: "export",

  // Trailing slashes produce `resume/index.html` instead of `resume.html`,
  // which makes S3 static-website routing work without extra redirect rules.
  trailingSlash: true,

  // Next.js image optimization requires a server; disable it for static export.
  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    // Prevent pdfjs-dist from trying to import the Node.js `canvas` package
    // during the build step.
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
