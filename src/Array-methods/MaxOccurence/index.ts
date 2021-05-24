import '../Count'
import '../Unique'
export {}
type returnobject ={
    value:number;
    occurences:number;
}
declare global{
    interface Array<T>{
    /**
     * "MD"
     * 
     * A method that returns the item whose occurence is maximium.
     * 
     * Example
     * ```typescript
     * const myarr=[1,2,3,4,2];
     * myarr.getmostOccurence()//returns {value:2,occurences:2} 
     * 
     * ```
     */
     getmostOccurence(value:T):returnobject;
        
    }
}
Array.prototype.getmostOccurence=function():returnobject{
    if(this.length==0) throw new Error("Array is Empty....")
    var array:Array<any>=this.distinct();
    let value:number=0;
    let occurences:number=0;
    this.forEach((x)=>{
        let count=this.count(x);
        if(count>occurences){
            value=x;
            occurences=count;
        }
    })
    return {value,occurences};
} 

