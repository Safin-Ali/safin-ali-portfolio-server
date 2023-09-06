import { Request } from 'express';
import createRouter from 'express';

export interface Custom_Requst <T> extends Request {
	body?:T
}

export type CustomRouter = [string, createRouter.Router];