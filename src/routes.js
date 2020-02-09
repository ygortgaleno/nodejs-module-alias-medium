const { Router } = require('express');
const UserRoutes = require('@routes/UserRoutes');

const baseRouter = Router();

const baseResponse = (_request, response) => response.status(200).json({
  message: 'API is Up',
});

baseRouter.get('/', baseResponse);

baseRouter.use([
  UserRoutes,
]);

module.exports = baseRouter;
