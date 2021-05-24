export {};
declare global {
    interface Array<T> {
        /**
         * "MD"
         *
         * A method that removes the undefined and null valus in a array.
         *
         * Example
         * ```typescript
         * const myarr=[1,null,undefined,true];
         * myarr.optimize()// returns [1,true]
         *
         * ```
         */
        optimize(): Array<T>;
    }
}
//# sourceMappingURL=index.d.ts.map