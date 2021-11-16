import '../Sort'
export{}
declare global{
    interface Array<T>{
        /**
         * A method that returns the median of elements in the array.
         *
         *  Example
         * ```typescript
         * const arr=[1,2,3];
         * arr.median();//returns 2;
         * ```
         */
        median():number |string;
    }
}
Array.prototype.median=function():number|string{
    if(this.length%2==1) return this.sortf()[Math.round(this.length/2)-1];
    return (this.sortf()[Math.round(this.length/2)-1]+this.sortf()[Math.round(this.length/2)])/2;
}