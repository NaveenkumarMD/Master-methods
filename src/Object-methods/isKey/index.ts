export {}
declare global{
    interface Object{
        /**
         * MD
         * An Object method to check if the given key is present in the object.
         * Example
         * ```typescript
         * const obj={a:"naveen",b:23,c:true}
         * obj.isKey("a");//returns true;
         * ```
         * 
         */
        isKey(value:any):boolean;
    }
}
Object.prototype.isKey=function(value:any):boolean{
    return this.hasOwnProperty(value);
}