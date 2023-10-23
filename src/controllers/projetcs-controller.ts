import { ProjectsModel } from '@model/projects-schema';
import { routeHandler } from '@utilities/common-utilities';

/**
 * Get list of all projects as `array`.
 * @returns {Promise<void>}
 */
export const getProjects = routeHandler( async (_,res) => {
	try{
		const result = await ProjectsModel.find();
		res.send(result);
	} catch {
		res.status(500).send('Internal Server Error');
	}
});

/**
 * Get list of projects by used technology as `array`.
 * @returns {Promise<void>}
 */
export const getNProjects = routeHandler(async (req,res) => {
	try{
		const result = await ProjectsModel.find({
			projectTech: {
				$in: [req.query.category]
			}
		});
		res.send(result);
	} catch {
		res.status(500).send('Internal Server Error');
	}
});