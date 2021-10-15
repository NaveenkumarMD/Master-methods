export { }
declare global {
    interface Array<T> {
        /**
         * return a object with the given array as key and parameter as values.
         * Example
         * ```typescript
         * const arr=[1,3,1]
         * arr.zip([5,6,7]) //returns {1:5,3:6,1:7}
         * ```
         */
        zip(array: Array<any>): Object
    }
}
Array.prototype.zip = function (array): Object {
    var obj: Object = {}
    var len: Number = this.length > array.length ? this.length : array.length
    var i=0
    while(i<len){
        var temp:any=this[i]
        obj={
            ...obj,
            temp:array[i]
        }
    }
    return obj

}