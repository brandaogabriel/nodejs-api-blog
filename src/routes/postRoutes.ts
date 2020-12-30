import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired';
import postController from '../controllers/PostController';

const routes = Router();

routes.use(loginRequired);
routes.get('/', postController.index);
routes.get('/:id', postController.show);
routes.post('/', postController.store);
routes.put('/:id', postController.update);
routes.delete('/:id', postController.delete);

export default routes;
