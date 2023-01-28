import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorsService {
    /**
     * adds two numbers
     * @param num1 the first number
     * @param num2 the first number
     * @returns the sum of the numbers
     */
    add(num1: number, num2: number) {
        return num1 + num2;
    }
}
