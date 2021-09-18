export {};
declare global {
    interface Object {
        /**
         * MD
         *
         * A Object method to get the data types present in it
         * Example:
         * ```
         * const obj={a:"naveen",b:23,c:true}
         * obj.gettypes() //returns ["String","Number","Boolean"]
         * ```
         */
        gettypes(): Array<string>;
    }
}
//# sourceMappingURL=index.d.ts.map