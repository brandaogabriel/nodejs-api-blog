import { Router } from 'express';

import postController from '../controllers/PostController';

const routes = Router();

routes.get('/', postController.index);
routes.get('/:id', postController.show);
routes.post('/', postController.store);
routes.put('/:id', postController.update);
routes.delete('/:id', postController.delete);

export default routes;
