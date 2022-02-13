const { customConfig, loaders, plugins } = require('./webpack.common');
const { merge } = require('webpack-merge');

/**
 *
 * @param {webpack.Configuration} config
 * @param {Record<string, unknown>} options
 * @returns {webpack.Configuration}
 */
module.exports = (config, options) => {
  config.module.rules.unshift(...loaders);
  config.plugins.push(...plugins);
  if (config.mode === 'development') {
    return merge(config, customConfig);
  }
  return config;
};
