import './String-methods/Reverse'
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
function add(a: number, b: number): number {
    return a + b;
}
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
function subtract(a: number, b: number): number {
    return a - b;
}
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
function multiply(a: number, b: number): number {
    return a * b;
}
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
function divide(a: number, b: number): number {
    return a / b;
}
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
function modulo(a: number, b: number): number {
    return a % b;
}
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
function roundoff(value: number, digits: number): number {
    const factor: number = Math.pow(10, digits);
    return Math.round(value * factor) / factor;
}
function random(digits?: number, min?: number, max?: number): number {
    if (min != undefined && max != undefined) return Math.floor(Math.random() * (max - min + 1)) + min;
    if (digits != undefined) {
        const factor: number = Math.pow(10, digits);
        return Math.floor(Math.random() * (factor - factor / 10)) + (factor / 10);
    }
    return Math.floor(Math.random() * 1000000);

}

/**
 * @param value:
  * "MD"
  
 * A function that returns the difference of given two numbers.
 * Example
 *Example
  * ```typescript
  * let a=100
  * isPalindrome();//returns -1;
* ```
 */
function isPalindrome(value: number | string): boolean {
    return String(value).sreverse()==String(value) ? true :false;
}
export { add, subtract, multiply, modulo, divide, roundoff, random }

