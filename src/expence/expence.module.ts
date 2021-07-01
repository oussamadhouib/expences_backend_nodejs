import { Module } from '@nestjs/common';
import { ExpenceService } from './expence.service';
import { ExpenceResolver } from './expence.resolver';

@Module({
  providers: [ExpenceResolver, ExpenceService]
})
export class ExpenceModule {}
