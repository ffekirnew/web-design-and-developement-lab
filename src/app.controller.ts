import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/add")
  adder(@Body() numbers: {first: number, second: number}) {
    return this.appService.add(numbers.first, numbers.second);
  }

  @Post("/subtract")
  subtracter(@Body() numbers: {first: number, second: number}) {
    return this.appService.subtract(numbers.first, numbers.second);
  }

  @Post("/multiply")
  multiplier(@Body() numbers: {first: number, second: number}) {
    return this.appService.multiply(numbers.first, numbers.second);
  }

  @Post("/divide")
  divider(@Body() numbers: {first: number, second: number}) {
    return this.appService.divide(numbers.first, numbers.second);
  }
}
