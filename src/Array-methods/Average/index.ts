import '../Sum'
export {}
declare global{
  interface Array<T>{
    /**
     * 
     * Examples:
     * ```typescript
     * const arr=[1,2,3];
     * arr.average();//returns 2;
     * ```
     */
    average():number;
  }
}
Array.prototype.average=function(){
  return this.sum()/this.length ;
}