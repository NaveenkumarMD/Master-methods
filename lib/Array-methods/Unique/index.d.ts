export {};
declare global {
    interface Array<T> {
        /**
         * A methods returs the array wih unique elements.
         * Example
         * ```typescript
         * const arr=[1,3,1]
         * arr.distinct() ;//returns [1,3]
         * ```
         */
        distinct(): T[];
    }
}
//# sourceMappingURL=index.d.ts.map