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
function rgbtohex(red:number,green:number,blue:number):String {
    return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}

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
function hextorgb(c:any):String{
    if(c===null ||c===undefined ||c===" "){
        throw new Error("Provide a valid value")
    }
    return  `rgb(${c.match(/\w\w/g).map((x: any)=>+`0x${x}`)})`;
}

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
function randhex():String{
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
}
export {rgbtohex,hextorgb,randhex}