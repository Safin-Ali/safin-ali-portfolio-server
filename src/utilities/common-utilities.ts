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
 * Defines a type for route handler functions.
 * @template ReturnType - The expected return type of the handler.
 * @param {Request} req - The HTTP request object.
 * @param {Response} res - The HTTP response object.
 * @returns {void | ReturnType} - The return type can be void or the specified ReturnType.
 */
/**
 * Creates a route handler function.
 * @param {RouteHandlerType} callback - The callback function that handles the route.
 *
 * Note: `callback` function accept two `Arguments`. first will be `Request` Object and second is `Response` object
 * @returns {RouteHandlerType} - The route handler function.
 * @example
 * // Define a handler function
 *	const myHandler = (req, res) => {
 *		const queryVal = req.params;
 *		res.send('Hello, World!',queryVal);
 * };
 *
 * // Create a route handler using routeHandler
 * const routeHandlerFunction = routeHandler(myHandler);
 *
 * // Use routeHandlerFunction as an Express route handler
 * app.get('/my-route', routeHandlerFunction);
 */
export const routeHandler = (callback: RouteHandlerType): RouteHandlerType => {
	return callback;
};