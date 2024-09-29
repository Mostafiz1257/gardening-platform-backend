import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';
import router from './app/routers';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/',router)

const getAController = (req: Request, res: Response) => {
  res.send('Gardening tricks and tips platform backend server is running.');
};
app.get('/', getAController);

console.log(process.cwd());
export default app;
