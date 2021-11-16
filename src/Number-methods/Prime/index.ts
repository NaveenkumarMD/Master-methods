import '../Composite'
export{}
declare global{
    interface Number{
        /**
         * MD
         * 
         * A number method returns  whether a number is Composite.
         *
         *  Example:
         * 
         * ```typescript
         * var x=3;
         * 3.isPrime()//returns true;
         * ```
         */
        isPrime():boolean;
    }
}
Number.prototype.isPrime=function():boolean{
    return !this.isComposite();
}