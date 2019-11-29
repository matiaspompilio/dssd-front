const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const commonPaths = require('./common-paths')

// const URL_BASE = 'http://192.168.0.11:8091'
const URL_BASE = 'https://dssd-front.herokuapp.com/'


const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
  ],
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8091,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    public: URL_BASE,
    host: '0.0.0.0',
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: commonPaths.template,
        to: commonPaths.outputPath,
        transform: (content) => Buffer.from(
          content.toString()
            .replace('<!-- base -->', `<base href="${URL_BASE}/">`)
            .replace(new RegExp('{{base}}', 'g'), '/'),
          'utf8',
        ),
      },
      {
        from: commonPaths.favicon,
        to: commonPaths.outputPath,
      },
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}

module.exports = config
