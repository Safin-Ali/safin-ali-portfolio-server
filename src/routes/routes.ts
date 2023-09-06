import { Application } from 'express';
import { CustomRouter } from '@custom-types/routes.d';
import common_router from './common-router';
import projectsRouter from './projects-router';

class Routes {
	public app: Application;

	// here mount or add all routes group module
	routesPath: CustomRouter[] = [
		projectsRouter,
	];
	constructor(app: Application) {
		this.app = app;

		// for common route or route middleware. like route.all()
		this.routesPath.push(common_router);

		this.initRoutes();
	}


	initRoutes() {
		this.routesPath.map(rt => this.app.use(rt[0], rt[1]));
	}
}

export default Routes;