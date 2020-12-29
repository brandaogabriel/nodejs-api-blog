import { Router } from 'express';

import homeRoutes from './homeRoutes';
import postRoutes from './postRoutes';
import userRoutes from './userRoutes';

const routes = Router();

routes.use('/', homeRoutes);
routes.use('/posts', postRoutes);
routes.use('/users', userRoutes);

export default routes;
