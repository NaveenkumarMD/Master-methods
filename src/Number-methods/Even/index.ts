export {}
declare global{
    interface Number{
        /**
         * MD
         * 
         * A number method returns  whether a number is odd or even.
         *
         *  Example:
         * 
         * ```typescript
         * var x=3;
         * 3.isEven()//returns false;
         * ```
         */
        isEven():boolean;
    }
}
Number.prototype.isEven=function(){    
    return <any>this%2==0?true:false;
}