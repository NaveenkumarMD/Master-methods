import '../Sort'
export {}
declare global{
    interface Array<T>{
    /**
     * "MD"
     * @param count
     * @param callbackfn
     * @param key
     * A method that returns the required number of elements with condition.
     * 
     * Example
     * ```typescript
     * const myarr=[1,2,3,4];
     * myarr.getElements(2,x=>x%2==1);//return [1,3];
     * myarr.getElements(2,-1)//return [3,4]
     * 
     * ```
     */
        getElements(count:number,callbackfn?:(value:T)=>boolean,key?:1|-1):Array<T>;
    }
}
Array.prototype.getElements=function Array<T>(count:number,func=(x:T)=> (true || false as boolean) as boolean,key?:1|-1):Array<T>{
    if(count>this.length)throw Error("Count is greater thean the length of the given array....");
    let array:Array<T>=[];
    let x:Array<T>=this;
    if(key==-1) x=x.reverse()
    for(let i:number=0;i<this.length;i++){
        if(func(x[i]))array.push(x[i]);
        if(array.length==count && key==-1)return array.reverse();
        else if(array.length==count)return array;       
    }
    if(key==-1)return array.reverse();
    return array;
}