import { getServices } from '@controllers/services-controller';
import configRouter from '@utilities/config-router';
import {Router} from 'express';

export const router = Router();

/**
 * handle to get services data
 */
router.route(`/`)
	.get(getServices);

export default configRouter(['/api/services',router]);