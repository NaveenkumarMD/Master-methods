export{}
declare global{
    interface String{
        /**
         * MD
         * 
         * A string method that checks whether it contains only alphabets.
         * 
         * Example:
         * ```typescript
         * const x="naveen"
         * x.isAlpha()//returns true;
         * ```
         */
        isAlpha():boolean;
    }
}
String.prototype.isAlpha=function(){
    let x:any=this;
    const re=/^[A-Z ]+$/i
    return re.test(x);
}