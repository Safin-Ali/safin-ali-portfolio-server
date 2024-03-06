import { RouteHandlerArg } from '@custom-types/types.d';
import { Response } from 'express';
import { createTransport } from 'nodemailer';

/**
 * A utility function for handling route requests in an Express.js application.
 * It takes a callback function of type RouteHandlerArg<Req, Ret> and returns the same function.
 * @typeparam Req - The type of the request body. Defaults to undefined.
 * @typeparam Ret - The type of the return value. Defaults to void.
 * @param callback - The route handler function.
 * @returns The same route handler function.
 */

export const routeHandler = <Req = undefined,Ret = void>(callback:RouteHandlerArg<Req,Ret>) => {
	return callback;
}

/**
 * Sends a 500 Internal Server Error response.
 * @param res Express Response object.
 * @returns void
 */
export const errRes = (res: Response) => res.status(500).send('Server Side Error');



/**
 * create nodemailer transport
 */

export const transport = createTransport({
	service: 'gmail',
	auth: {
		user:process.env.MY_EMAIL,
		pass:process.env.MY_EMAIL_PASS
	}
});