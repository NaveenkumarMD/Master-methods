import '../Sort'
export {}
declare global{
    interface Array<T>{
    /**
     * A method that returns the maximum value in the given array.
     * Example
     * ```typescript
     * const myarr=[1,2,3];
     * myarr.max();//return 3;
     * 
     * ```
     */
        max():number|string;
    }
}
Array.prototype.max=function():number|string{
    return this.sortf(-1)[0];
}