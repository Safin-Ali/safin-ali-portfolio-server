import { Request } from 'express';
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

export type CustomRouter = [string, createRouter.Router];