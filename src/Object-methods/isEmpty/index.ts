export {}
declare global{
    interface Object{
        /**
         * MD
         * An oobject method to check whether it is empty or not
         * @returns True if the object is empty, false otherwise.
         * @example
         * const obj = {
         *   a: 1,
         *  b: 2,
         * c: 3
         * };
         * obj.isEmpty(); // false
         * 

         */
        isEmpty():boolean
    }
}
Object.prototype.isEmpty=function():boolean{
    if(this===null || this===undefined || Object.keys(this).length===0)return true;
    return false;
}