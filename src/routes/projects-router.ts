import { getNProjects, getProjects } from '@controllers/projetcs-controller';
import configRouter from '@utilities/config-router';
import { Router } from 'express';

export const router = Router();

/**
 * handle to get projects data
 */
router.route(`/`)
	.get(getProjects);

/**
 * handle to get projects data by project technology bases
 */
router.get(`/categ`,getNProjects);

export default configRouter(['/api/projects', router]);