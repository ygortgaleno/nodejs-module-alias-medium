import { Router } from 'express';
import UserController from '../controllers/UserController';

class UserRoutes {
  constructor() {
    this.router = Router();
    this.createRoutes();
  }

  createRoutes() {
    this.router.route('/users').get(UserController.index);
  }
}

export default new UserRoutes().router;
