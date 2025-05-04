import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// app
import { AppController } from './app.controller';
// auth
import { AuthModule } from './auth/auth.module';
// config
import configuration from './config/configuration';
import { DatabaseConfigFactory } from './config/database-config.factory';
// hash
import { HashModule } from './hash/hash.module';
// offers
import { OffersModule } from './offers/offers.module';
// users
import { UsersModule } from './users/users.module';
// wishes
import { WishesModule } from './wishes/wishes.module';
// wishlists
import { WishlistsModule } from './wishlists/wishlists.module';

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
    UsersModule,
    WishesModule,
    WishlistsModule,
    OffersModule,
    AuthModule,
    HashModule,
  ],
  providers: [],
})
export class AppModule {}
