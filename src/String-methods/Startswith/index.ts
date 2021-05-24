import '../Truncate'
export{}
declare global{
    interface String{
        /**
         * 
         * @param value 
         * A string method that checks whether the given string ends with the sepecified value.
         * 
         * Example:
         * ```typescript
         * var str="naveen kumar"
         * str.startsWith("nav")//returns true;
         * 
         * ```
         * 
         */
        startsWith(value:string):boolean
    }
}
String.prototype.startsWith=function(value:string){
    return this.truncate(value).length==0
}