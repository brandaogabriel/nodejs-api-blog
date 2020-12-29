import express from 'express';
import '../node_modules/dotenv/config.js';

import routes from './routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

export default app;
