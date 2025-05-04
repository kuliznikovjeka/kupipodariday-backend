import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// entities
import { Wish } from './entities/wish.entity';
// wishes
import { WishesController } from './wishes.controller';
import { WishesService } from './wishes.service';

@Module({
  controllers: [WishesController],
  exports: [WishesService],
  imports: [TypeOrmModule.forFeature([Wish])],
  providers: [WishesService],
})
export class WishesModule {}
