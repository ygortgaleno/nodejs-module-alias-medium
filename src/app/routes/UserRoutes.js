const { Router } = require('express');
const UserController = require('@controllers/UserController');

class UserRoutes {
  constructor() {
    this.router = Router();
    this.createRoutes();
  }

  createRoutes() {
    this.router.route('/users').get(UserController.index);
  }
}

module.exports = new UserRoutes().router;
