import { getAllProjects, getProject } from '@controllers/projects-controller';
import { Router } from 'express';

const router = Router();

router.get('/all',getAllProjects);
router.get('/:id',getProject);

export default router;