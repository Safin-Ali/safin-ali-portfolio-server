import logger from '@utilities/color-logger';
import { readFileAsync, resolveWithRoot, routeHandler } from '@utilities/common-utilities';
/**
 * Handles requests to the root route ("/") and sends an HTML response.
 *
 * @param {import('express').Request} _ - The Express.js request object.
 * @param {import('express').Response} res - The Express.js response object.
 */

export const rootRouteHandler = routeHandler((_,res)=>{
	readFileAsync(resolveWithRoot('template','about.html'),(e)=>{
		logger.error(e);
		res.status(500).send(`Server Side Error`);
	},(d)=>{
		res.status(200).end(d);
	});
});