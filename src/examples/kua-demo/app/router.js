module.exports = (app) => {
  const { router, controller } = app;
  router.get('/home', controller.main.home);
  router.get('/test', controller.test.home);
};
