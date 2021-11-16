export{}
declare global{
    interface Number{
        /**
         * "MD"
         
         * A number method that return the Radian of the given degree.
         * Example
         * ```typescript
         * let a=45;
         * a.toRadian();//returns 0.7853981633974483;
         * ```
         */
        toRadian():number;
    }
}
Number.prototype.toRadian=function():number{
    return <any>this*((22/7)/180);
}