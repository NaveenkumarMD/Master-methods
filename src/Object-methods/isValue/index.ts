export {}
declare global{
    interface Object{
        /**
         * MD
         * An object method check whether a value is in the object or not.
         * @param value The value to check.
         * @returns True if the value is in the object, false otherwise.
         * @example
         * const obj = {
         *    a: 1,
         *   b: 2,
         *  c: 3
         * };
         * obj.isValue(1); // true
         * obj.isValue(2); // true
         * obj.isValue(3); // true
         * obj.isValue(4); // false
         * 
         */
        isValue(value:any):boolean;
    }
}
Object.prototype.isValue=function(value:any):boolean{
    if (value===null) return false;
    if (value===undefined) return false;
    if (typeof value==="object") return false;
    if (typeof value==="function") return false; 
    return value in Object.values(this);
}