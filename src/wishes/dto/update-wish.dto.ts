import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';

import { CreateWishDto } from './create-wish.dto';

export class UpdateWishDto extends PartialType(CreateWishDto) {
  @IsNumber()
  raised: number;
}
