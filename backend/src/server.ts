import app from './app/app';

const PORT = process.env.PORT || 8082;

async function bootstrap() {
  try {
    // await mongoose.connect(config.db_uri as string)
    console.log('DB connected successfully');
    app.listen(PORT, () => {
      console.log('listening to ' + PORT + ' ...');
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
