export {}
declare global{
    interface String{
        /**
         * MD
         * 
         * A string method that swap the cases.
         * 
         * Example:
         * ```typescript
         * const str="NaveeN"
         * str.swapcase()//returns "nAVEEn"
         * ```
         */
        swapcase():String
    }
}
String.prototype.swapcase=function(){
    return this.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}