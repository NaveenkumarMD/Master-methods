export {};
declare global {
    interface Array<T> {
        /**
         * Shorthand for creating a summation by a single attribute
         *
         * Examples:
         * ```typescript
         * const totalScore = myArr.sum(x => x.score);
         * const totalScore = [1,2,3].sum();
         * ```
         */
        sum(callbackfn?: (value: T) => number, thisArg?: any[]): number;
    }
}
//# sourceMappingURL=Array-operations.d.ts.map