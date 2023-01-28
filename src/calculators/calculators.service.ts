import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorsService {
    /**
     * adds two numbers
     * @param first the first number
     * @param second the first number
     * @returns the sum of the numbers
     */
    add(first: string, second: string) {
        const num1 = parseInt(first);
        const num2 = parseInt(second);
        
        return num1 + num2;
    }
}
