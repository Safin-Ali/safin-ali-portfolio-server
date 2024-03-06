import { DBOperationArg } from '@custom-types/types.d';
import {MongoClient} from 'mongodb';

/**
 * Executes a database operation with MongoDB.
 * @param callback The callback function that performs the database operation.
 * @throws Throws an error if the database operation encounters an error.
 * @returns A Promise that resolves when the database operation is complete.
 */

export const dbOperation = async <R = undefined>(callback:DBOperationArg<R>):Promise<R> => {
	const client = new MongoClient(process.env.MONGODB_URI!);
	try {
		await client.connect();
		const dbIns = client.db(process.env.MONGODB_DB_NAME);
		const result = await callback(dbIns);
		return result;

	} catch (err) {
		throw Error('DB Operation Error')
	} finally {
		await client.close(true);
	}
}