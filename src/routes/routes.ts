import { Application } from 'express';
import { CustomRouter } from '@custom-types/routes.d';
import common_router from './common-router';

class Routes {
	public app : Application;

	// here mount or add all routes group module
	readonly routesPath: CustomRouter[] = [
		common_router
	];
	constructor (app:Application) {
		this.app = app;
		this.initRoutes();
	}

	initRoutes() {
		this.routesPath.map(rt => this.app.use(rt[0],rt[1]));
	}
}

export default Routes;