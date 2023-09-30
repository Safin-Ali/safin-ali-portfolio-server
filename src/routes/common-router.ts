import { rootRouteHandler } from '@controllers/root-page';
import configRouter from '@utilities/config-router';
import {Router} from 'express';

export const router = Router();

router.all('/api/*',rootRouteHandler);

export default configRouter(['/',router]);