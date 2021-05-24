import '../Truncate'
export{}
declare global{
    interface String{
        /**
         * 
         * @param value 
         * A string method that checks whether the given string ends with the sepecified value.
         * 
         * Example:
         * ```typescript
         * var str="naveen kumar"
         * str.endsWith("kumar")//returns true;
         * 
         * ```
         * 
         */
        endsWith(value:string):boolean
    }
}
String.prototype.endsWith=function(value:string){
    var index=this.length-value.length;
    return index>0 && this.indexOf(value,index)>-1
}