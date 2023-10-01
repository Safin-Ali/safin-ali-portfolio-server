import { ProjectsModel } from '@model/projects-schema';
import { Response} from 'express';

export async function getProjects(_:unknown, res: Response) {
	const result = await ProjectsModel.find();
	return res.send(result);
}