import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * checks if the endpoint is working
   * @returns a string
   */
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * adds two numbers
   * @param a first numbers
   * @param b second number
   * @returns the sum of the numbers
   */
  add(a: number, b: number) {
    return a + b;
  }

  /**
   * subtracts b from a
   * @param a first numbers
   * @param b second number
   * @returns the sum of the numbers
   */
  subtract(a: number, b: number) {
    return a - b;
  }

  /**
   * multiplies two numbers
   * @param a first numbers
   * @param b second number
   * @returns the sum of the numbers
   */
  multiply(a: number, b: number) {
    return a * b;
  }

  /**
   * divides two numbers
   * @param a first numbers
   * @param b second number
   * @returns the sum of the numbers
   */
  divide(a: number, b: number) {
    return a / b;
  }
}
