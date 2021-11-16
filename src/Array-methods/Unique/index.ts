export{}
declare global{
    interface Array<T>{
        /**
         * A methods returs the array wih unique elements.
         * Example
         * ```typescript
         * const arr=[1,3,1]
         * arr.distinct() ;//returns [1,3]
         * ```
         */
        distinct():T[]
    }
}
Array.prototype.distinct=function():any[]{
    return this.filter((value:string | number,index:number,self:any[]):boolean=>self.indexOf(value)===index);
}