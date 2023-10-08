import inDevMode from './developmet-mode';
import logger from './color-logger';
import { createTransport } from 'nodemailer';
import { my_email, my_email_pass } from '@config/env-var';
import { RouteHandlerType } from '@custom-types/routes.d';
/**
 * create nodemailer transport
 */

export const transport = createTransport({
	service: 'gmail',
	auth: {
		user: my_email,
		pass: my_email_pass
	}
});


/**
 * Creates a route handler function.
 * @param {RouteHandlerType} callback - The callback function that handles the route.
 *
 * @description
 * `Note 1:` This define default return and req type is `void` and `Request` ⇦⇦ express.
 *
 * `Note 2`: `callback` function accept two `Arguments`. first will be `Request` Object and second is `Response` object.
 *
 * `Note 3`: If you want to use `custom type` then use `generic` type with first `Argument` is `return` type of callback and second will be `request` type.
 *
 * @returns {RouteHandlerType} - The route handler function.
 * @example
 * // Define a handler function
 *	const myHandler = (req, res) => {
 *		const queryVal = req.params;
 *		res.send('Hello, World!',queryVal);
 * };
 *
 * // creating custom types alias
 *
 * type CustomReturnType = Promised<void>
 *
 * //for CustomReqType you need to import Request type from express.
 *
 * type CustomReqType = Request & {
 * body: {name:string ...etc},
 * query: {search:string ...etc},
 * }
 *
 * // Define a handler function with custom type
 *
 * const myHandler = <Promise<void>,CustomReqType> (req, res) => {
	const queryVal = req.params;
	res.send('Hello, World!', queryVal);
	}
 *
 * // Create a route handler using routeHandler
 * const routeHandlerFunction = routeHandler(myHandler);
 *
 * // Use routeHandlerFunction as an Express route handler
 * app.get('/my-route', routeHandlerFunction);
 */

export const routeHandler = <Return = void, Req = undefined>(callback: RouteHandlerType<Return, Req>): RouteHandlerType<Return, Req> => {
	return callback;
};