import expres,{json} from 'express';
import {config}  from 'dotenv';
config();
import cors from 'cors';
import projects_router from '@routes/projects-router';
import { rootRouteHandler } from '@controllers/root-controller';
import {resolve} from 'path';
import { sendEmail } from '@controllers/smtp-controller';
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

app.use('/api/project',projects_router);

app.get('/api',rootRouteHandler);

// for send email
app.post('/api/sendEmail',sendEmail);

app.listen(port, () => {
	console.log(`server run on ${port}`)
})
