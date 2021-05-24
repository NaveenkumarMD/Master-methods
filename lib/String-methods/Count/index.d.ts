export {};
declare global {
    interface String {
        /**
         * MD
         *
         * @param str
         *
         * A string method that count the number of occurences of the given string.
         * Example:
         * ```typescript
         * const str="Naveen kumar is a good boy"
         * str.count("a");//returns 3
         * str.count(" ");//returns 5
         * str.count("aveen");//returns 1
         * ```
         */
        count(str: string): number;
    }
}
//# sourceMappingURL=index.d.ts.map