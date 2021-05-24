export {}
declare global{
    interface Array<T>{
    /**
     * A method that returns the cardinal value i of the given element in the given array.
     * Example
     * ```typescript
     * const myarr=[1,2,3];
     * myarr.count(1);//return 1;
     * 
     * ```
     */
        count(value:any):number;
    }
}
Array.prototype.count=function(value:any):number{
    let count=0;
    this.forEach(x=>{if(x==value) count++;})
    return count;
}