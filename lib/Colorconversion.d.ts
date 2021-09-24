/**
 * @param red:
 * @param green:
 * @param blue
  * "MD"
  
 * A function converts rgb into hexadecimal value.
 * Example
 *Example
  * ```typescript
  * let a=rgbtohex(0,51,255)
  * a //returns #0033ff;
* ```
 */
declare function rgbtohex(red: number, green: number, blue: number): String;
/**
 *@param hex
  * "MD"
  
 * A function converts hexadecimal value into rgb
 * Example
 *Example
  * ```typescript
  * let a=hextorgb(#0033ff)
  * a //returns rgb(0,51,255) ;
* ```
 */
declare function hextorgb(c: any): String;
/**
 *
  * MD
  
 * A function returns random color in hexadecimal value.
 * Example
 *Example
  * ```typescript
  * console.log(randhex())
  * return #fff43 or any color

* ```
 */
declare function randhex(): String;
export { rgbtohex, hextorgb, randhex };
//# sourceMappingURL=Colorconversion.d.ts.map