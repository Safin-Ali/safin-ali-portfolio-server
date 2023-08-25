import { Request } from 'express/lib/request';
import { Response } from 'express/lib/response';

export function rootRouteHandler(req: Request, res: Response) {
	res.send(`<h1>this is root page </h1>`);
}