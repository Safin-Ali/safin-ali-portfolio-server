import { Application, } from 'express';
import CORS from './CORS';
import {json} from 'express';
import {resolve} from 'path';

const initMiddleware = (app:Application) => {

	// replace default rendering views directory to the template directory
	app.set('views',resolve(__dirname,'..','template'));

	// set EJS default render engine
	app.set('view engine','ejs');

	// for JSON pharser
	app.use(json());

	// for CORS
	app.use(CORS());
};

export default initMiddleware;