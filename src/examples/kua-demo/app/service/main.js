const { Service } = require('../../../../libraries/kua');

class MainService extends Service {
  async home({ msg }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(msg);
      }, 1000);
    });
  }
}

module.exports = MainService;
