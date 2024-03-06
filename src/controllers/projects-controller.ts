import { ProjectModel } from '@custom-types/db-data-type.d';
import { dbOperation } from 'db/db';
import { routeHandler } from 'utils/common-utils';

/**
 * Retrieves all projects from the database and sends a response containing a modified subset of project data.
 * @param _ - Express request object.
 * @param res - Express response object.
 * @returns void
 */
export const getAllProjects = routeHandler(async (_, res) => {
    /**
     * Retrieves project data from the database and modifies it before sending a response.
     * @param db - Database connection object.
     * @returns Promise<ProjectModel[]> - A promise containing an array of ProjectModel objects.
     */
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
});
