export {}

declare global{
    interface Object{
        /**
         * MD
         * 
         * A Object method to get the data types present in it
         * Example:
         * ```
         * const obj={a:"naveen",b:23,c:true}
         * obj.gettypes() //returns ["String","Number","Boolean"]
         * ```
         */
        gettypes():Array<string>
    }
}
Object.prototype.gettypes=function():Array<any>{
    const arr:any=new Set([])
    var x:any[]=Object.values(this)
    x.forEach(e => {
        return arr.add(typeof(e));
    });
    return Array.from(arr)

}