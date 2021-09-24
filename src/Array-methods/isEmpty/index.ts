export{}
declare global{
    interface Array<T>{
        /**
         * A method that returns whether the array is empty or not.
         *
         *  Example
         * ```typescript
         * const arr=[1,2,3];
         * arr.isEmpty();//returns false;
         * ```
         */
        isEmpty():boolean;
    }
}
Array.prototype.isEmpty=function():boolean{
    return this.length===0;
}