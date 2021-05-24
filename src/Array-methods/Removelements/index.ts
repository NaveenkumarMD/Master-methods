export {}
declare global{
    interface Array<T>{
    /**
     * "MD"
     * 
     * A method that removes the given element or a given array of elements.
     * 
     * Example
     * ```typescript
     * const myarr=[1,2,3,4];
     * myarr.remove([1,2]) //returns [3,4]
     * myarr.remove(1) //returns [2,3,4]
     * ```
     */
    remove(values:Array<T>|T|string):Array<T>
        
    }
}
function contains<T>(array:T[],value:any):boolean{
    let flag:boolean=false;
    array.forEach(element => {
        if(element==value)flag= true;
    });
    return flag;
}
Array.prototype.remove=function <T>(values:T|Array<T>|string):Array<T>{
    if(values==undefined) throw new Error("Value parameter must be given with some values..");
    if(typeof values =="string")return this.filter(element=>typeof element != values);
    let array:any=values;
    if(typeof values !="object")array=[values]
    return this.filter(element=>!contains(array,element));        
}

