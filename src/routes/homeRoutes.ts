import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired';
import homeController from '../controllers/HomeController';

const router = Router();

router.get('/', loginRequired, homeController.index);

export default router;
