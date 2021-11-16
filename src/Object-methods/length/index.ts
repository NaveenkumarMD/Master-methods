export { }
declare global {
    interface Object {
        /**
         * MD
         * 
         * Property conatins the number of elements in the object.
         * 
         * ```typescript
         * const obj={a:"naveen",b:23,c:true}
         * obj.length() //returns 3
         * ```
         */
        length: number
    }
}
function getlength(object: { hasOwnProperty: (arg0: string) => any; } | undefined) {
    var size = 0
    var key;
    if (object) {
        for (key in object) {
            if (object.hasOwnProperty(key)) size++;
        }
    }
    return size;
};

Object.prototype.length = getlength(this);