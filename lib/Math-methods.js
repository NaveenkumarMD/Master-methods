"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.roundoff = exports.divide = exports.modulo = exports.multiply = exports.subtract = exports.add = void 0;
require("./String-methods/Reverse");
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
function add(a, b) {
    return a + b;
}
exports.add = add;
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
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
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
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
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
function divide(a, b) {
    return a / b;
}
exports.divide = divide;
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
function modulo(a, b) {
    return a % b;
}
exports.modulo = modulo;
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
function roundoff(value, digits) {
    var factor = Math.pow(10, digits);
    return Math.round(value * factor) / factor;
}
exports.roundoff = roundoff;
function random(digits, min, max) {
    if (min != undefined && max != undefined)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    if (digits != undefined) {
        var factor = Math.pow(10, digits);
        return Math.floor(Math.random() * (factor - factor / 10)) + (factor / 10);
    }
    return Math.floor(Math.random() * 1000000);
}
exports.random = random;
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
function isPalindrome(value) {
    return String(value).sreverse() == String(value) ? true : false;
}
//# sourceMappingURL=Math-methods.js.map