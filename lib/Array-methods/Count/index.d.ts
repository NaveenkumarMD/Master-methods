export {};
declare global {
    interface Array<T> {
        /**
         * A method that returns the cardinal value i of the given element in the given array.
         * Example
         * ```typescript
         * const myarr=[1,2,3];
         * myarr.count(1);//return 1;
         *
         * ```
         */
        count(value: any): number;
    }
}
//# sourceMappingURL=index.d.ts.map