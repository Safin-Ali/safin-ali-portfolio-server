import { Application, } from 'express';
import bodyPharser from './body-pharser';
import CORS from './CORS';

const initMiddleware = (app:Application) => {

	// for JSON pharser
	app.use(bodyPharser());

	// for CORS
	app.use(CORS());
};

export default initMiddleware;