import { ProjectModel } from '@custom-types/db-data-type.d';
import { dbOperation } from '@database/db';
import { errRes, routeHandler } from '@utilities/common-utils';
import { ObjectId } from 'mongodb';

/**
 * Retrieves all projects from the database and sends a response containing a modified subset of project data.
 * @param _ - Express request object.
 * @param res - Express response object.
 * @returns void
 */
export const getAllProjects = routeHandler(async (_, res) => {
	try {
		const data = await dbOperation<ProjectModel[]>(async (db) => {
			// Fetch all projects from the 'projects' collection in the database
			const result = await db.collection<ProjectModel>('projects').find().toArray();
			return result;
		});

		// Modify the retrieved project data to include only selected properties
		const modifiedShort = data.map((prop) => {
			// Destructure the properties to exclude certain fields
			const {
				projectCategory,
				projectOthersInfo,
				projectTech,
				projectUsedLib,
				...shorted
			} = prop;

			return shorted;
		});

		// Send the modified project data as a response
		res.send(modifiedShort);
	} catch (err:any) {
		console.log(err.message)
		errRes(res);
	}
});


/**
 * Retrieves project data from the database based on the provided project ID.
 * @param req Express Request object.
 * @param res Express Response object.
 * @returns Promise<void>
 */
export const getProject = routeHandler(async (req, res) => {

	try {
		const data = await dbOperation<ProjectModel | null>(async (db) => {
			const result = await db.collection('projects').findOne({
				_id: new ObjectId(req.params.id as string)
			});
			return result as ProjectModel | null;
		});

		res.send(data);
	} catch (err:any) {
		console.log(err.message)
		errRes(res);
	}
})
