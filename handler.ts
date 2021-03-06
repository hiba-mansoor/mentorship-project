import 'source-map-support/register';
import express from 'express';
import bodyParser from 'body-parser';
import serverlessHttp from 'serverless-http';
import { productRouter } from './src/routes/product';

const app = express();
app.use(bodyParser.json());

app.use((_req: express.Request, _res: express.Response, next: Function) => {
    console.log(`this is the url ${_req.url}`);
    next();
    console.log('finish processing the request');
});

app.use('/mentorship', productRouter);

export const handler = serverlessHttp(app);
