import '../../String-methods/Reverse'
export{}
declare global{
    interface Number{
        /**
         * "MD"
         
         * A number method that return the reverse of the number.
         * Example
         * ```typescript
         * let a=123;
         * a.reverse();//returns 321;
         * ```
         */
        reverse():number;
    }
}
Number.prototype.reverse=function():number{
    return Number(String(this).sreverse())
}