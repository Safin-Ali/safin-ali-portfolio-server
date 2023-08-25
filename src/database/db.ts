import { mongodb_URI } from '@config/env-var';
import mongoose from 'mongoose';
import inDevMode from 'src/utilities/developmet-mode';

/**
 * * connect the app with database
 *
 */

async function main() {
	try{
		await mongoose.connect(mongodb_URI!);
		inDevMode(() => console.log(`database connection successfull`));
	}
	catch {
		inDevMode(() => {
			console.log(`database connection failed`);
		});
	}
}

export default main;