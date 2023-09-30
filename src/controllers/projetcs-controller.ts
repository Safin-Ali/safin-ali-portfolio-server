import { ProjectSchemaType } from '@custom-types/database-schema.d';
import { Custom_Requst } from '@custom-types/routes.d';
import { ProjectsModel } from '@model/projects-schema';
import { Response, Request } from 'express';
import inDevMode from '@utilities/developmet-mode';

export async function getProjects(req: Request, res: Response) {
	const result = await ProjectsModel.find();
	return res.send(result);
}

export async function addProjects(req: Custom_Requst<ProjectSchemaType>, res: Response) {
	try {
		await ProjectsModel.create(req.body);
		res
			.status(500)
			.send({
				message: 'projects add successfull'
			});

	}
	catch (err) {
		inDevMode(() => console.log(err));
		res
			.status(500)
			.send({
				message: 'server side error'
			});
	}
}