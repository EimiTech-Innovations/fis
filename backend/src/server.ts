import mongoose from 'mongoose';
import app from './app';
import { configValues } from './config';
import dbConnect from './config/db';

async function bootstrap() {
  try {
    // await mongoose.connect(config.db_uri as string)
    //connect to the dbs
    await dbConnect();
    app.listen(configValues.PORT, () => {
      console.log(
        `Server is running on ${configValues.NODE_ENV}://localhost:${configValues.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit on failure
  }
}

bootstrap();
// Graceful shutdown (important for nodemon restarts)
process.on('SIGINT', async () => {
  await mongoose.disconnect();
  console.log('🔌 Database disconnected');
  process.exit(0);
});
