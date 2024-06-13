import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import router from '../backend/routes/contactsRoutes.mjs';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

module.exports.handler = serverless(app);

