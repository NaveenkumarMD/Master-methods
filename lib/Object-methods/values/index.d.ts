export {};
declare global {
    interface Object {
        /**
         * MD
         *
         * A Object method to get all the values of the object.
         * Example:
         * ```
         * const obj={a:"naveen",b:23,c:true}
         * obj.keys() //returns ["naveen",23,true]
         * ```
         */
        values(): Array<any>;
    }
}
//# sourceMappingURL=index.d.ts.map