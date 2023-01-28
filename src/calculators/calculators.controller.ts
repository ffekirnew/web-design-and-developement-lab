import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculatorsService } from './calculators.service';

@Controller('calculators')
export class CalculatorsController {
  constructor(private readonly calculatorsService: CalculatorsService) {}

  /**
   * handles add post requests
   * @param numbers the numbers to be added
   * @returns 
   */
  @Post('/add')
  adder(@Body() numbers: { first: string, second: string }) {
    const sum = this.calculatorsService.add(numbers.first, numbers.second);
    return { sum: sum };
  }
}
