import { Request,Response } from 'express';
import createRouter from 'express';

export interface Custom_Requst <T> extends Request {
	body:T
}

export interface EmailType {
	emailSub:string
	senderName:string,
	senderEmail:string,
	emailDesc:string,
}

export type RouteHandlerReturnType <T> = void | Promise<T | void>;

export type RouteHandlerType = <T>(req: Request, res: Response) => RouteHandlerReturnType<T>;

export type CustomRouter = [string, createRouter.Router];