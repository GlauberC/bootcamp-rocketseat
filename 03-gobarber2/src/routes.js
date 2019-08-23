import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionControlller';
import FileController from './app/controllers/FileController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middlewares/auth';
import ProviderController from './app/controllers/ProviderController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // middleware global, mas que só funciona para rotas abaixo dele

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
