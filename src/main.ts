import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with Access-Control-Allow- Origin
  app.use(cors({
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin']
  }));

  await app.listen(3000);
}
bootstrap();
