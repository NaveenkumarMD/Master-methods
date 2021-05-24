export {};
declare global {
    interface String {
        /**
         * "MD"
         *
         * A string method checks whether a password is strong or not.
         * Password should contains
         *      Lowercase letters
         *      Uppercase letters
         *      Special characters
         *      Numbers
         * to be strong
         *
         * Example
         * ```typescript
         * const pass="Naveen@1234"
         * pass.validatePass()//returns "strong"
         * ```
         */
        validatePass(): "strong" | "normal" | "weak";
    }
}
//# sourceMappingURL=index.d.ts.map