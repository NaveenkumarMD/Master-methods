export {}
declare global{
    interface String{
        /**
         * MD
         * 
         * A string method that extract the required string from it.
         * 
         * Example:
         * ```typescript
         * const str="naveen kumar"
         * str.truncate(2)//returns "na"
         * str.truncate(" ")//returns "naveen"
         * 
         * ```
         */
        truncate(index:string|number):string
    }
}
String.prototype.truncate=function(index){
    if(typeof index =="number" )return this.slice(0,index)
    return this.slice(0,this.indexOf(index))
}