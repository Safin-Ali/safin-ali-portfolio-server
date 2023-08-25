import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

export const {mongodb_URI,port,node_env} = {
	mongodb_URI: env.MONGODB_URI,
	port: env.PORT || 5000,
	node_env:env.NODE_ENV,
};