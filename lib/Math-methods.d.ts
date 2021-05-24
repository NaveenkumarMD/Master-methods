import './String-methods/Reverse';
/**
 * @param a:number
 * @param b:number
 * "MD"
  
 * A function that returns the sum of given two numbers.
 * Example
 *Example
  * ```typescript
  * let a=1,b=2;
  * sum(a,b);//returns 3;
* ```
 */
declare function add(a: number, b: number): number;
/**
 * @param a:number
 * @param b:number
 * "MD"
  
 * A function that returns the difference of given two numbers.
 * Example
 *Example
  * ```typescript
  * let a=1,b=2;
  * subtract(a,b);//returns -1;
* ```
 */
declare function subtract(a: number, b: number): number;
/**
 * @param a:number
 * @param b:number
 * "MD"
  
 * A function that returns the product of given two numbers.
 * Example
 *Example
  * ```typescript
  * let a=1,b=2;
  * multiply(a,b);//returns 2;
* ```
 */
declare function multiply(a: number, b: number): number;
/**
 * @param a:number
 * @param b:number
 * "MD"
  
 * A function that returns the quotient.
 * Example
 *Example
  * ```typescript
  * let a=1,b=2;
  * divide(a,b);//returns 0.5;
* ```
 */
declare function divide(a: number, b: number): number;
/**
 * @param a:number
 * @param b:number
 * "MD"
  
 * A function that returns the modulo of given two numbers.
 * Example
 *Example
  * ```typescript
  * let a=2,b=2;
  * modulo(a,b);//returns 0;
* ```
 */
declare function modulo(a: number, b: number): number;
/**
 * "MD"
 * @param value:number
 * @param digits:number
 *
 *
 * A function that returns the roundoff with the given number og digits.
 *
 *
 *Example
  * ```typescript
  * let a=2.00145634,b=4;
  * roundoff(a,b);//returns 2.0015;
* ```
 */
declare function roundoff(value: number, digits: number): number;
declare function random(digits?: number, min?: number, max?: number): number;
export { add, subtract, multiply, modulo, divide, roundoff, random };
//# sourceMappingURL=Math-methods.d.ts.map