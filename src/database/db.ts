import { mongodb_URI } from '@config/env-var';
import { ConnectionOptions } from '@custom-types/mongoose.d';
import mongoose from 'mongoose';
import inDevMode from 'src/utilities/developmet-mode';

/**
 * * connect the app with database
 *
 */

async function main() {

	const options: ConnectionOptions = {
		useNewUrlParser: true,
		useUnifiedTopology:true
	};

	try {
		await mongoose.connect(mongodb_URI!, options);
		inDevMode(() => console.log(`database connection successfull`));
	}
	catch {
		inDevMode(() => {
			console.log(`database connection failed`);
		});
	}
}

export default main;