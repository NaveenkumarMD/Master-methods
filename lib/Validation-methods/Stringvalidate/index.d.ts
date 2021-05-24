export {};
declare global {
    interface String {
        /**
         * "MD"
         *
         * A string method that validates the mail.
         *
         * Example:
         * ```typescript
         * const mail="naveen9715568487@gmail.com";
         * mail.validateMail() //returns true
         * ```
         */
        validateMail(): boolean;
    }
}
//# sourceMappingURL=index.d.ts.map