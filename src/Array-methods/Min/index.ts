import '../Sort'
export {}
declare global{
    interface Array<T>{
    /**
     * A method that returns the minimum value in the given array.
     *
     * Example
     * ```typescript
     * const myarr=[1,2,3];
     * myarr.min();//return 1;
     * 
     * ```
     */
        min():number|string;
    }
}
Array.prototype.min=function():number|string{
    return this.sortf(1)[0];
}