import { Module } from '@nestjs/common';
import { CalculatorsService } from './calculators.service';
import { CalculatorsController } from './calculators.controller';

@Module({
  controllers: [CalculatorsController],
  providers: [CalculatorsService]
})
export class CalculatorsModule {}
