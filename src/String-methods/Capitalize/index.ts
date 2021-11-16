export {}
declare global{
    interface String{
        /**
         * MD
         * 
         * A string method that capitalize the first letter.
         * 
         * Example:
         * ```typescript
         * const str="Naveen kumar is a good boy."
         * str.capitalize()//returns "Naveen kumar is a good boy"
         * ```
         */
        capitalize():string
    }
}
String.prototype.capitalize=function(){
    return this.trim().charAt(0).toLocaleUpperCase()+this.trim().slice(1);
}