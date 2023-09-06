import { rootRouteHandler } from '@controllers/root-page';
import {Router} from 'express';
import configRouter from 'src/utilities/config-router';

export const router = Router();

router.all('/api/*',rootRouteHandler);

export default configRouter(['/',router]);