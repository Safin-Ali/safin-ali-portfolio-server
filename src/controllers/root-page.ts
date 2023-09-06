import { Request, Response } from 'express';

/**
 * Handles requests to the root route ("/") and sends an HTML response.
 *
 * @param {import('express').Request} req - The Express.js request object.
 * @param {import('express').Response} res - The Express.js response object.
 */
export function rootRouteHandler(req: Request, res:Response) {
	res.send(`<h1>this is root page </h1>`);
}