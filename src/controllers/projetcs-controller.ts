import { ProjectsModel } from '@model/projects-schema';
import { Response, Request } from 'express';

export async function getProjects(_:unknown, res: Response) {
	try{
		const result = await ProjectsModel.find();
		return res.send(result);
	} catch {
		return res.status(500).send('Internal Server Error');
	}
}

export async function getNProjects(req: Request, res: Response) {
	try{
		const result = await ProjectsModel.find({
			projectTech: {
				$in: [req.query.category]
			}
		});
		return res.send(result);
	} catch {
		return res.status(500).send('Internal Server Error');
	}
}