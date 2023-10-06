import { Request,Response } from 'express';
import createRouter from 'express';

export interface CustomRequestBodyType <T> extends Request {
	body:T
}

export interface EmailType {
	emailSub:string
	senderName:string,
	senderEmail:string,
	emailDesc:string,
}

export type RouteHandlerReturnType <T> = void | Promise<T | void>;
export type RouteHandlerRequestType <Req> = Req extends undefined ? Request : Req;

export type RouteHandlerType <Return,CustomReq> = (req: RouteHandlerRequestType<CustomReq>, res: Response) => RouteHandlerReturnType<Return>;

export type CustomRouter = [string, createRouter.Router];