export {}

declare global{
    interface String{
        /**
         * MD
         * 
         * A string method to check whether it is null or undefined.
         * Example:
         * ```
         * const str=null
         * str.isnull() returns true
         * str=undefined
         * str.null() returns true
         * ```
         */
        isnull():Boolean
    }
}
String.prototype.isnull=function():boolean{
    return this===null || this===undefined
}