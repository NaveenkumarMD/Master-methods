export{}
declare global{
    interface Number{
        /**
         * "MD"
         
         * A number method that return the Degree of the given Radian.
         * Example
         * ```typescript
         * let a=0.7853981633974483;
         * a.toDegree();//returns 45;
         * ```
         */
        toDegree():number;
    }
}
Number.prototype.toDegree=function():number{
    return <any>this*180/(Math.PI);
}