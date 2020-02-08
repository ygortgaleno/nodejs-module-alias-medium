import express from 'express';
import routes from '~/routes';

class App {
  constructor() {
    this.app = express();
    this.routes();
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
