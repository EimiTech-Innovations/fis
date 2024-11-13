import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const createApp = (): Application => {
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

  app.get('/', (req, res) => {
    res.send('Sever is healthy');
  });

  return app;
};

export default createApp;
