export {};
declare global {
    interface String {
        /**
         * MD
         *
         * A string method that extract the required string from it.
         *
         * Example:
         * ```typescript
         * const str="naveen kumar"
         * str.truncate(2)//returns "na"
         * str.truncate(" ")//returns "naveen"
         *
         * ```
         */
        truncate(index: string | number): string;
    }
}
//# sourceMappingURL=index.d.ts.map