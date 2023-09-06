import { addProjects, getProjects } from '@controllers/projetcs-controller';
import {Router} from 'express';
import configRouter from 'src/utilities/config-router';

export const router = Router();

router.route(`/`)
	.get(getProjects)
	.post(addProjects);

export default configRouter(['/api/projects',router]);