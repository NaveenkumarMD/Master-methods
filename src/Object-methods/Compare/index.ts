export { }
declare global {
    interface Object {
        /**
         * MD
         * An object method to compare the keys of two objects.
         * @param obj The object to compare.
         * @returns True if the keys are the same, false otherwise.
         * @example
         * const obj1 = {
         *   a: 1,
         *  b: 2,
         * c: 3
         *  };
         * const obj2 = {
         *  a: 1,
         * b: 2,
         * c: 37
         * };
         * obj1.compare(obj2); // true   
         * 
         */
        compare(obj: Object): boolean
    }
}
Object.prototype.compare = function (obj: Object): boolean {
    if (obj === null) return false;
    if (obj === undefined) return false;
    if (typeof obj !== "object") return false;
    if (typeof obj !== "function") return false;
    if (Object.keys(this).length !== Object.keys(obj).length) return false;
    for (let key in this) {
        if (!(key in obj)) return false;
    }
    return true;
}