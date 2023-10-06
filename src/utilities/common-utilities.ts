import { resolve } from 'path';
import { PathOrFileDescriptor, readFile } from 'fs';
import inDevMode from './developmet-mode';
import logger from './color-logger';
import { createTransport } from 'nodemailer';
import { my_email, my_email_pass } from '@config/env-var';
import { RouteHandlerType } from '@custom-types/routes.d';
/**
 * Resolves a path relative to the root directory.
 * @param {...string} path - The path segments to resolve.
 * @returns {string} The resolved path.
 */
export const resolveWithRoot = (...path: string[]) => {
	return resolve(__dirname, '..', ...path);
};

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
 *
 * @description readFile asynchronously with `utf-8` encoding
 * @param path - accept file path.
 * @param reject - accept `callback function` which will be error or data handler.
 * @param resolve - that is `optional` params accept `callback function` which will be only data handler
 * @overload `Node: If use two Argument then second Argument will be considered as data handler`
 *
 */

export function readFileAsync(path: PathOrFileDescriptor, reject: ((e: string) => void), resolve?: ((d: string) => void)) {
	readFile(path, 'utf-8', (err, data) => {
		if (typeof resolve === 'undefined') {
			if (err) return inDevMode(() => logger.error(err.message));
			reject(data);
		} else {
			if (err) return reject(err.message);
			resolve(data);
		}
	});
}


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