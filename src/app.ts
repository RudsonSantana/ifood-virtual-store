import dontenv from 'dotenv';
dontenv.config();

import express from 'express';
import { routes } from './app/routes';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.DB_PORT_APP, () => {
  console.log('Server started');
})