import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

// app
import { AppModule } from './app.module';
// shared
import { FALLBACK_VALUES } from './shared/constants';

const { PORT = FALLBACK_VALUES.SERVER_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.listen(PORT);
}
bootstrap();
