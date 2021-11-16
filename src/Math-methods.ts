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
 * 
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
/**
 * "MD"
 * @param digits:number
 * @param min:number
 * @param max:number
 * 
 *
 * A function that returns some random number between a range and with number of digits.
 * 
 * 
 *Example
  * ```typescript
  * import math from 'master-methods'
  * console.log(math.random(3)) returns // any 3 digit value
  * console.log(math.random(2,10,45)) returns // any 2 digit value betweeen 10 and 45
* ```
 */
function random(digits?: number, min?: number, max?: number): number {
    if (min != undefined && max != undefined) return Math.floor(Math.random() * (max - min + 1)) + min;
    if (digits != undefined) {
        const factor: number = Math.pow(10, digits);
        return Math.floor(Math.random() * (factor - factor / 10)) + (factor / 10);
    }
    return Math.floor(Math.random() * 1000000);

}
/**
 * 
 * @param a 
 * @param b 
 * 
 * "MD"
 * A function that returns the quotient and remainder of given two numbers.
 * ```ts
 * let a=100
 * let b=10
 * divmod(a,b);//returns [10,0]];
 * 
 * 
 * ```
 *
 */

function divmod(a: number, b: number): [number, number] {
    if (b==null){
        throw new Error("Divider should be provided")
    }
    if (b==0) return [0,0];
    return [Math.floor(a / b), a % b];
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

//colors


export { add, subtract, multiply, modulo, divide, roundoff, random,isPalindrome,divmod }

