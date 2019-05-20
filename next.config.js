const withCSS = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages(
  withCSS({
    webpack: config => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
      // Example using webpack option
      // config.plugins.push(new webpack.IgnorePlugin(//__tests__//));
      return config
    },

    handleImages: ['jpeg', 'png', 'webp', 'gif']
  })
)
