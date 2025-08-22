module.exports = {
  eslint: {
    // disables eslint during client build alone.
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // emotion: {
    //   // sourceMap is on by default but source maps are dead code eliminated in production
    //   sourceMap: true,
    //   autoLabel: 'dev-only',
    //   labelFormat: '[local]',
    //   // cssPropOptimization: true,
    // },
  },

  async headers() {
    return [
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, immutable', // 1 hour cache
          },
        ],
      },
    ];
  },
};
