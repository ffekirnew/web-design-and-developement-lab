import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorsModule } from './calculators/calculators.module';

@Module({
  imports: [CalculatorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
