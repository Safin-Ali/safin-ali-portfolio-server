import { Application, } from 'express';
import CORS from './CORS';
import {json} from 'express';

const initMiddleware = (app:Application) => {

	// for JSON pharser
	app.use(json());

	// for CORS
	app.use(CORS());
};

export default initMiddleware;