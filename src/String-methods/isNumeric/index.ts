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
         * const x="78.90"
         * x.isNum()//returns true;
         * ```
         */
        isNum():boolean;
    }
}
String.prototype.isNum=function(){
    let x:any=this;
    const re=/^[0-9.]+$/
    return re.test(x);
}