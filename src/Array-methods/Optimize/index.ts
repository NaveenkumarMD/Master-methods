export {}

declare global{
    interface Array<T>{
    /**
     * "MD"
     * 
     * A method that removes the undefined and null valus in a array.
     * 
     * Example
     * ```typescript
     * const myarr=[1,null,undefined,true];
     * myarr.optimize()// returns [1,true]
     * 
     * ```
     */
    optimize():Array<T> 
        
    }
}
Array.prototype.optimize=function Array<T>():Array<T>{
    return this.filter(x=>x!=null && x!=undefined);
}


