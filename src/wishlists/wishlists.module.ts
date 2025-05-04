import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// wishes
import { WishesModule } from '../wishes/wishes.module';
// entities
import { Wishlist } from './entities/wishlist.entity';
// wishlists
import { WishlistsController } from './wishlists.controller';
// wishlists
import { WishlistsService } from './wishlists.service';

@Module({
  controllers: [WishlistsController],
  imports: [TypeOrmModule.forFeature([Wishlist]), WishesModule],
  providers: [WishlistsService],
})
export class WishlistsModule {}
