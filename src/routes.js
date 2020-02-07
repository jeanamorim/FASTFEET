import { Router } from 'express';
import UserControllers from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionController';
import RecipientsControllers from './app/controllers/RecipientsControllers ';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserControllers.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsControllers.store);

export default routes;
