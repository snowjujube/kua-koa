const assert = require('assert');

module.exports = async (app) => {
  const config = app.config.koaPluginDemo;

  assert(config, '[kua-plugin-demo] config file required');

  // eslint-disable-next-line no-param-reassign
  app.kuku = config.root;
};
