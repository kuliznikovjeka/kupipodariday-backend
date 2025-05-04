import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// hash
import { HashModule } from '../hash/hash.module';
// entities
import { User } from './entities/user.entity';
// users
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([User]), HashModule],
  providers: [UsersService],
})
export class UsersModule {}
