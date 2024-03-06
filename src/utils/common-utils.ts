import { RouteHandlerArg } from '@custom-types/types.d';

/**
 * A utility function for handling route requests in an Express.js application.
 * It takes a callback function of type RouteHandlerArg<Req, Ret> and returns the same function.
 * @typeparam Req - The type of the request body. Defaults to undefined.
 * @typeparam Ret - The type of the return value. Defaults to void.
 * @param callback - The route handler function.
 * @returns The same route handler function.
 */

export const routeHandler = <Req = undefined,Ret = void>(callback:RouteHandlerArg<Req,Ret>) => {
	return callback;
}