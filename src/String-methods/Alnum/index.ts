export{}
declare global{
    interface String{
        /**
         * MD
         * 
         * A string method that checks whether it contains only alphabets and numbers only.
         * 
         * Example:
         * ```typescript
         * const x="97naveen"
         * x.isAlnum()//returns true;
         * ```
         */
        isAlnum():boolean;
    }
}
String.prototype.isAlnum=function(){
    let x:any=this;
    const re=/^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/
    return re.test(x);
}