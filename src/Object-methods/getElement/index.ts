export {}

declare global{
    interface Object{
        /**
         * MD
         * 
         * A safer method to get the elements in a object.
         * returns null if the element is not present in it 
         * Example:
         * ```
         * const obj={a:"naveen",b:23,c:true}
         * obj.get("a")// returns "naveen"
         * obj.get("d") //returns "null"
         * ```
         */
        get(key:any):any
    }
}
Object.prototype.get=function(key:any):any{
    
}