import '../Truncate';
export {};
declare global {
    interface String {
        /**
         *
         * @param value
         * A string method that checks whether the given string ends with the sepecified value.
         *
         * Example:
         * ```typescript
         * var str="naveen kumar"
         * str.endsWith("kumar")//returns true;
         *
         * ```
         *
         */
        endsWith(value: string): boolean;
    }
}
//# sourceMappingURL=index.d.ts.map