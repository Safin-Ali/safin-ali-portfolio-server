import { ServicesModel } from '@model/services-schema';
import { Response} from 'express';

export async function getServices(_:unknown, res: Response) {
	const result = await ServicesModel.find();
	return res.send(result);
}