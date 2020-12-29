import { Router } from 'express';

import tokenController from '../controllers/TokenController';

const routes = Router();

routes.post('/', tokenController.store);

export default routes;
