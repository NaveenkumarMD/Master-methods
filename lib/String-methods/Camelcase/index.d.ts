export {};
declare global {
    interface String {
        /**
         * MD
         *
         * A string method that converts into  camel case.
         *
         * Example:
         * ```typescript
         * var str="naveen kumar"
         * str.camelCase()//returns naveenKumar;
         * str="Naveen Kumar"
         * str.camelCase()//returns NaveenKumar;
         * ```
         */
        camelCase(): string;
    }
}
//# sourceMappingURL=index.d.ts.map