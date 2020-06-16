module.exports = app => ({
  middleware: [
    'koa-body',
  ],
  plugin: [
    'kua-plugin-demo',
  ],
  koaPluginDemo: {
    root: app.root,
  },
});
