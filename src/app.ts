import expres,{json} from 'express';
import {config}  from 'dotenv';
import cors from 'cors';

config();
const port = process.env.PORT || 5000;

const app = expres();

app.use(cors({
	origin:'https://safin-ali.vercel.app',
	methods:['GET','POST']
}));

app.use(json());

app.get('/',(req,res) => {
	res.send();
})


app.listen(port, () => {
	console.log(`server run on ${port}`)
})
