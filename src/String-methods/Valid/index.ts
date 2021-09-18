export { }

declare global {
    interface String {
        /**
         * MD
         * 
         * A string method that checks whether the given string is valid or not.
         * 
         * Example:
         * ```typescript
         * const str="naveen kumar"
         * str.isvalid()//returns true
         * consts str=null
         * str.isvalid()//returns false
         * 
         * ```
         */
        isvalid():Boolean
    }
}
String.prototype.isvalid=function():boolean{
    return this !=null && this !=undefined && this!="" && this!=" "
}
