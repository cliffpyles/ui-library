const path = require('path')
const inflection = require('inflection')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        '@system': path.resolve(__dirname, './src/_system'),
        '@patterns': path.resolve(__dirname, './src/library/patterns'),
        '@components': path.resolve(__dirname, './src/library/components'),
        '@layouts': path.resolve(__dirname, './src/library/layouts'),
        '@views': path.resolve(__dirname, './src/library/views'),
        '@project': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      new WebpackNotifierPlugin({
        title: 'Relax',
        skipFirstNotification: true
      })
    ]
  })
  return config
}
