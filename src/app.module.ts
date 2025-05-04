import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// app
import { AppController } from './app.controller';
// config
import configuration from './config/configuration';
import { DatabaseConfigFactory } from './config/database-config.factory';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigFactory,
    }),
  ],
  providers: [],
})
export class AppModule {}
