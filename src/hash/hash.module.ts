import { Module } from '@nestjs/common';
import { HashService } from './hash.service';

@Module({
  exports: [HashService],
})
export class HashModule {}
