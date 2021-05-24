export {};
declare global {
    interface Array<T> {
        /**
         * "MD"
         *
         * A method that removes the given element or a given array of elements.
         *
         * Example
         * ```typescript
         * const myarr=[1,2,3,4];
         * myarr.remove([1,2]) //returns [3,4]
         * myarr.remove(1) //returns [2,3,4]
         * ```
         */
        remove(values: Array<T> | T | string): Array<T>;
    }
}
//# sourceMappingURL=index.d.ts.map