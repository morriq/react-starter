/* eslint-disable global-require */
module.exports = () => ({
  parser: 'postcss-scss',
  plugins: [
    require('colorguard'),
    require('autoprefixer')
  ]
});
/* eslint-enable global-require */
