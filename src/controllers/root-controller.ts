/**
 * Handles requests to the root route ("/") and sends an HTML response.
 *
 * @param {import('express').Request} _ - The Express.js request object.
 * @param {import('express').Response} res - The Express.js response object.
 */

import { routeHandler } from '@utilities/common-utils';

export const rootRouteHandler = routeHandler((_,res)=>{
	res.render('root-page');
});