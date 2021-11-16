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
         * 3.isOdd()//returns true;
         * ```
         */
        isOdd():boolean;
    }
}
Number.prototype.isOdd=function(){    
    return <any>this%2==1?true:false;
}