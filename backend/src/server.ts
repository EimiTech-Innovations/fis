import createApp from './app';
import { configValues } from './config';

export const app1 = createApp();

async function bootstrap() {
  try {
    // await mongoose.connect(config.db_uri as string)

    app1.listen(configValues.PORT, () => {
      console.log(
        `Server is running on ${configValues.NODE_ENV}://localhost:${configValues.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
