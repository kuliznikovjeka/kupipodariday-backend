import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

// config
import { JwtConfigFactory } from '../config/jwt-config.factory';
// hash
import { HashModule } from '../hash/hash.module';
// users
import { UsersModule } from '../users/users.module';
// auth
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// strategies
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    HashModule,
    PassportModule,
    JwtModule.registerAsync({
      useClass: JwtConfigFactory,
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtConfigFactory],
})
export class AuthModule {}
