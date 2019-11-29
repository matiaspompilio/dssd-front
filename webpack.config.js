/* eslint-disable */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.common.config');

module.exports = (env, argv) => {
  const determineAddons = (addons) => [...[addons]]
    .filter((addon) => Boolean(addon))
    .map((addon) => require(`./config/addons/webpack.${addon}.js`));

  const envConfig = require(`./config/webpack.production.config`);

  return webpackMerge(commonConfig, envConfig, ...determineAddons(argv.addons));
};
