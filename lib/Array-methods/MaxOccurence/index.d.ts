import '../Count';
import '../Unique';
export {};
declare type returnobject = {
    value: number;
    occurences: number;
};
declare global {
    interface Array<T> {
        /**
         * "MD"
         *
         * A method that returns the item whose occurence is maximium.
         *
         * Example
         * ```typescript
         * const myarr=[1,2,3,4,2];
         * myarr.getmostOccurence()//returns {value:2,occurences:2}
         *
         * ```
         */
        getmostOccurence(value: T): returnobject;
    }
}
//# sourceMappingURL=index.d.ts.map