import { Response,Request } from 'express';

export function rootRouteHandler(req: Request, res: Response) {
	res.send(`<h1>this is root page </h1>`);
}