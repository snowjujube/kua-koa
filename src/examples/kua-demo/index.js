const path = require('path');
const Kua = require('../../libraries/kua');

const app = new Kua.Application({
  root: path.resolve(__dirname),
});

app
  .assemble(__dirname)
  .listen(3030);
