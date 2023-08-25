import { port } from '@config/env-var';
import initMiddleware from '@middleware';
import Routes from '@routes/routes';

import express, { Application, Express } from 'express';

class App {

	private express:Express = express;
	private expressApp: Application;
	public routes:Routes;

	constructor() {
		this.expressApp = this.express();
		this.routes = new Routes(this.expressApp);
		initMiddleware(this.expressApp);
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