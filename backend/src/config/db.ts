import mongoose from 'mongoose';
import { configValues } from './index';

const dbConnect = async (): Promise<void> => {
  mongoose.set('strictQuery', true);

  // Establish connection
  await mongoose
    .connect(configValues.DB_URL)
    .then(() => {
      console.log(`Connected to database`);
    })
    .catch((e) => {
      // TODO: 1 log to one custom error
      console.log('Mongoose connection error');
      console.error(e);
    });

  //  connection check
  mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + configValues.DB_URL);
  });

  mongoose.connection.on('error', (err) => {
    console.error('Mongoose default connection error: ' + err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

  process.on('SIGINT', () => {
    process.exit(0);
  });
};

export default dbConnect;
