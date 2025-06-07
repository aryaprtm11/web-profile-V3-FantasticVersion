/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Optimasi untuk production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };
      
      // Tree shaking untuk FontAwesome
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/@fortawesome/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['babel-plugin-transform-imports', {
                '@fortawesome/free-solid-svg-icons': {
                  transform: '@fortawesome/free-solid-svg-icons/${member}',
                  skipDefaultConversion: true
                }
              }]
            ]
          }
        }
      });
    }
    
    return config;
  },
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
};

module.exports = nextConfig; 