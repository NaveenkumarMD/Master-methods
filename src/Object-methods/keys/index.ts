export {}
declare global{
    interface Object{
        /**
         * MD
         * 
         * A Object method to get all the keys of the object.
         * Example:
         * ```
         * const obj={a:"naveen",b:23,c:true}
         * obj.keys() //returns [a,b,c]
         * ```
         */
        keys():Array<any>
    }
}
Object.prototype.keys=function():Array<any>{
    return Object.values(this)
}