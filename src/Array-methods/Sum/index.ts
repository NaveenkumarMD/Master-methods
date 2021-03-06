export {};
declare global {
  interface Array<T> {
    /**
     * Shorthand for sorting an array by a single comparable attribute. Additional options for sorting descending.
     *
     * Example
     * ```typescript
     * const lowestFirst = myArr.SortByArg(x => x.score);
     * const lowestFirst = myArr.SortByArg(x => x.score, "ASC");
     *
     * const highestFirst = myArr.SortByArg(x => x.score, "DESC");
     * ```
     */
    sum(callbackfn?: (value: T) => number): number;
  }
}

Array.prototype.sum = function (func = x => (x as unknown) as number) {
  return this.reduce((res,x)=>res+func(x));
};
