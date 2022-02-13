const { loaders, plugins } = require('./webpack.common');

/**
 *
 * @param {webpack.Configuration} config
 * @param {Record<string, unknown>} options
 * @returns {webpack.Configuration}
 */
module.exports = (config, options) => {
  config.module.rules.unshift(...loaders);
  config.plugins.push(...plugins);
  return config;
};
