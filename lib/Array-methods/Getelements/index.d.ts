import '../Sort';
export {};
declare global {
    interface Array<T> {
        /**
         * "MD"
         * @param count
         * @param callbackfn
         * @param key
         * A method that returns the required number of elements with condition.
         *
         * Example
         * ```typescript
         * const myarr=[1,2,3,4];
         * myarr.getElements(2,x=>x%2==1);//return [1,3];
         * myarr.getElements(2,-1)//return [3,4]
         *
         * ```
         */
        getElements(count: number, callbackfn?: (value: T) => boolean, key?: 1 | -1): Array<T>;
    }
}
//# sourceMappingURL=index.d.ts.map