const { Controller } = require('../../../../libraries/kua');

class MainController extends Controller {
  // eslint-disable-next-line no-unused-vars
  async home(ctx, next) {
    const res = await ctx.service.main.home({ msg: '哭哭' });
    ctx.body = {
      msg: res,
      path: ctx.kuku_on_ctx,
      name: JSON.stringify(this),
    };
  }
}

module.exports = MainController;
