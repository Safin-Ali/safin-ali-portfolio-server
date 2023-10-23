import { ServicesModel } from '@model/services-schema';
import { routeHandler } from '@utilities/common-utilities';

/**
 * Get a services data as `array`.
 * @returns {Promise<void>}
 */
export const getServices = routeHandler( async(_, res) => {
	const result = await ServicesModel.find();
	res.send(result);
});