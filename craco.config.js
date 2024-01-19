const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      // Update the fallback configuration
      webpackConfig.resolve.fallback = {
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "stream": require.resolve("stream-browserify"),
      };

      return webpackConfig;
    },
  },
};
