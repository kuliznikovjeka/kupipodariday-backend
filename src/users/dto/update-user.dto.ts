import { PartialType } from '@nestjs/mapped-types';

// create-user
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
