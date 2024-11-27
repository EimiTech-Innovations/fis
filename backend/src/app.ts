import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dbConnect from './config/db';
import { configValues } from './config';
import errorMiddleware from './middleware/error.middleware';

// routes
import authRoutes from './routes/v1/auth.route';

//connect to the db
dbConnect();

const app: Application = express();

// Custom morgan format
morgan.format(
  'myCustomFormat',
  ':method :url :status - :response-time ms :date[iso]'
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Use the custom format
app.use(morgan('myCustomFormat'));

/**
 * @SERVER_STATUS
 * @ROUTE @GET {{URL}}/api/v1/ping
 * @DESC Returns response 200 with message pong if api is working
 * @ACCESS Public
 */
app.get(`/api/${configValues.PREFIX}/ping`, (_req, res) => {
  res.send({
    success: true,
    message: 'Pong',
  });
});

/**
 * @SERVER_MODE
 * @ROUTE @GET {{URL}}/api/v1/ping
 * @DESC Returns response 200 with application mode
 * @ACCESS Public
 */
app.get(`/api/${configValues.PREFIX}/mode`, (_req, res) => {
  res.status(200).json({
    success: true,
    environment: process.env.NODE_ENV === 'prod' ? 'production' : 'development',
  });
});

app.use(`/api/${configValues.PREFIX}/auth`, authRoutes);

/**
 * @SERVER_ROUTE_NOT_DEFINE
 * @ROUTE @GET {{URL}}/*
 * @DESC Returns response 404 with route not available
 * @ACCESS Public
 */
app.all('*', (_req, res) => {
  res.status(404).json({
    success: true,
    message: 'Route not found',
  });
});

app.use(errorMiddleware);

export default app;
