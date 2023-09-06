import mongoose from 'mongoose';

export interface ConnectionOptions extends mongoose.ConnectOptions {
	useNewUrlParser?: boolean,
	useUnifiedTopology?: boolean,
}