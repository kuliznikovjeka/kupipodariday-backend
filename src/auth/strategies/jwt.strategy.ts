import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// users
import { UsersService } from '../../users/users.service';
// types
import { TJwtPayload } from '../types/jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get<string>('JWT_SECRET') ?? 'default_secret',
    });
  }

  async validate({ sub }: TJwtPayload) {
    const user = await this.usersService.findById(sub);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
