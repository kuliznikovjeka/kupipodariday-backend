import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

// shared
import { SensitiveDataInterceptor } from '../shared/interceptors/sensitive-data-interceptor';
import { RequestWithUser } from '../shared/types/request-with-user';
// users
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
// auth
import { AuthService } from './auth.service';
// guards
import { LocalGuard } from './guards/local.guard';

@Controller()
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('signin')
  @UseGuards(LocalGuard)
  signin(@Req() req: RequestWithUser) {
    return this.authService.auth(req.user);
  }

  @Post('signup')
  @UseInterceptors(SensitiveDataInterceptor)
  signup(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
