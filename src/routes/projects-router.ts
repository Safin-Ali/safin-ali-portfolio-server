import { addProjects, getProjects } from '@controllers/projetcs-controller';
import configRouter from '@utilities/config-router';
import {Router} from 'express';

export const router = Router();

router.route(`/`)
	.get(getProjects)
	.post(addProjects);

export default configRouter(['/api/projects',router]);