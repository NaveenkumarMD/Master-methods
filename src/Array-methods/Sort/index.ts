export { }
declare global {
    interface Array<T> {
        /**
         * @param callbackfn
         * @param key 
         * Examples:
         * ```typescript
         * let array=[1,3,2];
         * array.sortf(a=>a);//returns [1,2,3];
         * array.sortf(-1,a=>a);//returns [3,2,1];
         * ```
         */
        sortf(
            key?: number,
            callbackfn?: (value: T) => string | number,)
            : T[]
    }
}
Array.prototype.sortf = function (key?: number, func = x => x,) {
    let k = key == undefined ? 1 : (key==1 ?1 :-1);
    return this.sort((a: any, b: any): any => func(a) > func(b) ? k : -k);
}