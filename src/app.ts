import expres,{json} from 'express';
import {config}  from 'dotenv';
import cors from 'cors';
import { rootRouteHandler } from '@controllers/root-controller';
import {resolve} from 'path';

config();
const port = process.env.PORT || 5000;

const app = expres();

// replace default rendering views directory to the template directory
app.set('views',resolve(__dirname,'template'));

// set EJS default render engine
app.set('view engine','ejs');

app.use(cors({
	origin:'https://safin-ali.vercel.app',
	methods:['GET','POST']
}));

app.use(json());

app.get('/api',rootRouteHandler);

app.listen(port, () => {
	console.log(`server run on ${port}`)
})
