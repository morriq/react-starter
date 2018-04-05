const developmentWebpack = require('./webpack/webpack.development.js');
const productionWebpack = require('./webpack/webpack.production.js');


module.exports = ({ production }) => {
  if (production) {
    return productionWebpack();
  }
  return developmentWebpack();
};
