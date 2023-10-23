import { rootRouteHandler } from '@controllers/root-page';
import { sendEmail } from '@controllers/smtp-controller';
import configRouter from '@utilities/config-router';
import { Router } from 'express';
import { Response } from 'express';

export const router = Router();

/**
 * Handles GET requests to the root path and redirects to '/api'.
 */
router.get('/', (_, res: Response) => {
	return res.redirect(301, '/api');
});

/**
 * Handles GET requests to the '/api' path and delegates to 'rootRouteHandler'.
 */
router.get('/api', rootRouteHandler);

/**
 * Handle POST request to the '/sendEmail' path to handler sendEmail controller.
 */

router.post('/api/sendEmail',sendEmail);

/**
 * Handles all HTTP methods (GET, POST, PUT, DELETE, etc.) for paths under '/api' and delegates to 'rootRouteHandler'.
 */
router.all('/api/*', rootRouteHandler);

/**
 * Exported default configuration for the router.
 */
export default configRouter(['', router]);