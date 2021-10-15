export {}
declare global{
    interface Object{
        /**
         * MD
         * 
         * A Object method to concatenate another object.
         * Example:
         * ```
         * const obj={a:"naveen",b:23,c:true}
         * const objb={d:"hello"}
         * obj.concat() //returns {a:"naveen",b:23,c:true,d:"hello"}
         * ```
         */
        concat(object1:Object):Object
    }
}
Object.prototype.concat=function(object1){
    return {...this,...object1}
}