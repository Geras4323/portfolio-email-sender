const emailRouter = require('./email.router');

function routerApi(app) {
  app.use('/email', emailRouter);
}

module.exports = routerApi;