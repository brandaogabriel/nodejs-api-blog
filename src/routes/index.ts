import { Router } from 'express';

import homeRoutes from './homeRoutes';
import postRoutes from './postRoutes';
import userRoutes from './userRoutes';
import tokenRoutes from './tokenRoutes';

const routes = Router();

routes.use('/', homeRoutes);
routes.use('/posts', postRoutes);
routes.use('/users', userRoutes);
routes.use('/tokens', tokenRoutes);

export default routes;
