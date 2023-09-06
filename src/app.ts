import { port } from '@config/env-var';
import initDB from '@database/db';
import initMiddleware from '@middleware';
import Routes from '@routes/routes';

import express, { Application, Express } from 'express';

class App {

	private express:Express = express;
	private expressApp: Application;
	public routes:Routes;

	constructor() {
		this.expressApp = this.express();
		initMiddleware(this.expressApp);
		this.routes = new Routes(this.expressApp);
		initDB();
	}

	server(){
		this.expressApp.listen(port,()=>{
			console.log(`the server is running on ${port}`);
		});
	}

}

const app = new App();

export const startServer = () => app.server();

export default app;