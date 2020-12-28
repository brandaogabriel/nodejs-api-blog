import { Router } from 'express';

import homeRouter from './homeRoutes';

const routes = Router();

routes.use('/', homeRouter);

export default routes;
