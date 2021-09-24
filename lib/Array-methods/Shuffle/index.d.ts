export {};
declare global {
    interface Array<T> {
        /**
         * An array method that returns a shuffled array.
         *
         *  Example
         * ```typescript
         * const arr=[1,2,3];
         * arr.shuffle();//returns [3,2,1] or anything;
         * ```
         */
        shuffle(): T[];
    }
}
//# sourceMappingURL=index.d.ts.map