const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const { resolve } = require('path');

const webpackCommon = require('./webpack.common.js');


const webpackProduction = () => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scs{2}$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              modules: true,
              alias: {
                '/assets': resolve('assets')
              }
            }
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                'assets/css/organisation/components/**/*.scss',
                'assets/css/organisation/palette.scss',
                'assets/css/resources/**/*.scss'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.cs{2}$|\.html$|\.eot?.+$|\.t{2}f?.+$|\.wof{1,2}.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new CopyWebpackPlugin([
      'static'
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      GATEWAY: '#{GATEWAY}',
      STAGE: '#{BETA}'
    })
  ]
});

module.exports = () => merge(
  webpackCommon(),
  webpackProduction()
);
