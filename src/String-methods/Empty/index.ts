export {}
declare global{
    interface String{
        /**
         * MD
         * 
         * A string method that checks whether a string is empty or not.
         * 
         * Example:
         * ```typescript
         * var str=""
         * str.isEmpty()//returns true;
         * str=" "
         * str.isEmpty()//returns true;
         * ```
         */
        isEmpty():boolean
    }
}
String.prototype.isEmpty=function():boolean{
    return this.trim().length==0;
}