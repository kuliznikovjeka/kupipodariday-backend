import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// users
import { UsersModule } from '../users/users.module';
// wishes
import { WishesModule } from '../wishes/wishes.module';
// entities
import { Offer } from './entities/offer.entity';
// offers
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';

@Module({
  controllers: [OffersController],
  imports: [TypeOrmModule.forFeature([Offer]), WishesModule, UsersModule],
  providers: [OffersService],
})
export class OffersModule {}
