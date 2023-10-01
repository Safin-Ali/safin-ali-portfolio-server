import { getSkills } from '@controllers/skills-controller';
import configRouter from '@utilities/config-router';
import {Router} from 'express';

export const router = Router();

/**
 * handle to get skills data
 */
router.route(`/`)
	.get(getSkills);

export default configRouter(['/api/skills',router]);