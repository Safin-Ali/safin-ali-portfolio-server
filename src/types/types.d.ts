import { Request, Response } from 'express';
import {Db} from 'mongodb';

/**
 * Represents a request body with a specific type.
 * @typeparam T - The type of the request body.
 */
interface CustomReqBody<T> extends Request {
    body: T;
}

/**
 * Represents the return type of a route handler function.
 * It can be void or a Promise resolving to a value of type R or void.
 * @typeparam R - The type of the return value.
 */
export type RouteHandlerReturnType<R> = void | Promise<R | void>;

/**
 * Represents the type of the request object in a route handler function.
 * If the generic type T is undefined, it uses the default Request type,
 * otherwise, it uses CustomReqBody<T> with a typed body property.
 * @typeparam T - The type of the request body.
 */
type RouteHandlerRequestType<T> = T extends undefined ? Request : CustomReqBody<T>;

/**
 * Represents the type of a route handler function.
 * It takes a request object of type RouteHandlerRequestType<T>,
 * a response object of type Response, and returns a RouteHandlerReturnType<R>.
 * @typeparam T - The type of the request body.
 * @typeparam R - The type of the return value.
 */
export type RouteHandlerArg<T, R> = (req: RouteHandlerRequestType<T>, res: Response) => RouteHandlerReturnType<R>;


/**
 * Defines the type for the callback function used in database operations.
 * @typeparam R The type of the result returned by the callback function.
 */
export type DBOperationArg<R> = (database:Db) => Promise<R>;

/**
 * Represents the structure of an email object.
 */
export interface EmailType {
	senderLocation:string
	emailSub:string
	senderName:string,
	senderEmail:string,
	emailDesc:string,
}