export{}
declare global{
    interface String{
        /**
         * MD
         * 
         * A string method that converts all the letters in a string to lower case.
         * 
         * Example
         * ```typescript
         * const str="NaveenKumar"
         * str.casefold()//returns "naveenkumar"
         * ```
         */
        casefold():string
    }
}
String.prototype.casefold=function():string{
    return this.replace(/[A-Z]/g,function(x){
        return x.toLocaleLowerCase();
    })
}