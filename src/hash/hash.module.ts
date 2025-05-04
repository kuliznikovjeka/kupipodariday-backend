import { Module } from '@nestjs/common';

// hash
import { HashService } from './hash.service';

@Module({
  exports: [HashService],
  providers: [HashService],
})
export class HashModule {}
