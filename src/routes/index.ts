import { Router } from 'express';

import homeRouter from './homeRoutes';
import postRouter from './postRoutes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/posts', postRouter);

export default routes;
