const HtmlWebPackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');


module.exports = () => ({
  entry: {
    app: 'src/index.jsx'
  },
  resolve: {
    modules: [
      resolve('./'),
      resolve('node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
});
