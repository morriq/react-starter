const merge = require('webpack-merge');
const express = require('express');
const { resolve } = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const apiMocker = require('connect-api-mocker');
const webpack = require('webpack');

const webpackCommon = require('./webpack.common');


const webpackDevelopment = () => ({
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scs{2}$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader',
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
  devServer: {
    before(app) {
      return app
        .use(apiMocker('/api', resolve('api')))
        .use(
          '/',
          express.static(resolve('static'))
        );
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      gateway: '/api',
      stage: 'localhost'
    })
  ]
});


module.exports = () => merge(
  webpackCommon(),
  webpackDevelopment()
);
