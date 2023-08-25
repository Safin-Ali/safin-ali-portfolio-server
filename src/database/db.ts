import config from '@config/env-var';
import mongoose from 'mongoose';

/**
 * * connect the app with database
 *
 */

async function main() {
	await mongoose.connect(config.mongodb_URI!);
}

export default main;