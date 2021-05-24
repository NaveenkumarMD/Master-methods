export {}
declare global{
    interface Number{
        /**
         * MD
         * 
         * A number method returns the number of digits.
         *
         *  Example:
         * 
         * ```typescript
         * var x=1634;
         * 3.length()//returns 4;
         * ```
         */
        length():number;
    }
}
Number.prototype.length=function():number{    
    return this.toString().length;
}