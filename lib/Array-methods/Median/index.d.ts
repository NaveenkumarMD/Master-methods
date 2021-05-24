import '../Sort';
export {};
declare global {
    interface Array<T> {
        /**
         * A method that returns the median of elements in the array.
         *
         *  Example
         * ```typescript
         * const arr=[1,2,3];
         * arr.median();//returns 2;
         * ```
         */
        median(): number | string;
    }
}
//# sourceMappingURL=index.d.ts.map