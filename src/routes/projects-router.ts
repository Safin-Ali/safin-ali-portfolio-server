import { getAllProjects } from '@controllers/projects-controller';
import { Router } from 'express';

const router = Router();

router.get('/all',getAllProjects);

export default router;