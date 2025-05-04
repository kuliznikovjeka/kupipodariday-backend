import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

// app
import { AppModule } from './app.module';
// shared
import {
  FALLBACK_VALUES,
  httpCorsMethods,
  httpLocalhost,
} from './shared/constants';

const { PORT = FALLBACK_VALUES.SERVER_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors({
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    methods: httpCorsMethods,
    origin: `${httpLocalhost}:${PORT}`,
  });
  await app.listen(PORT);
}
bootstrap();
