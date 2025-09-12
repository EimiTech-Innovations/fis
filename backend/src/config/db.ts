import mongoose from 'mongoose';
import { configValues } from './index';

const dbConnect = async (): Promise<void> => {
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(configValues.DB_URL);
    console.log(`Connected to database`);
  } catch (e) {
    console.log('Mongoose connection error');
    console.error(e);
    throw e; // <-- This is important!
  }

  mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + configValues.DB_URL);
  });

  mongoose.connection.on('error', (err) => {
    console.error('Mongoose default connection error: ' + err);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

  process.on('SIGINT', async () => {
    await mongoose.disconnect();
    process.exit(0);
  });
};

export default dbConnect;
