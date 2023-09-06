/**
 * @module database-connector
 * @description A module for connecting to the MongoDB database using Mongoose.
 */

import { mongodb_URI } from '@config/env-var';
import mongoose from 'mongoose';
import inDevMode from 'src/utilities/developmet-mode';
import { ConnectionOptions } from '@custom-types/mongoose.d';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import logger from '@utilities/color-logger';

/**
 * Connects the application to the MongoDB database.
 *
 * @async
 * @function
 * @throws {Error} Throws an error if the database connection fails.
 */
async function main() {
	/**
	 * Checks if the project root directory contains a '.env' file in development mode.
	 *
	 * @function
	 * @name checkEnvFile
	 */
	function checkEnvFile() {
		if (!existsSync(resolve(__dirname, '../..', '.env'))) {
			logger.error('In your project root directory, .env file is missing');
		}
	}

	// In development mode, check for the existence of the '.env' file.
	inDevMode(checkEnvFile);

	try {
		const options: ConnectionOptions = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};

		// Attempt to connect to the MongoDB database.
		await mongoose.connect(mongodb_URI!, options);
		inDevMode(() => logger.success(`Database connection successful`));
	} catch (error) {
		// Handle database connection failure.
		inDevMode(() => {
			logger.error(`Database connection failed: ${error}`);
		});
	}
}

export default main;
