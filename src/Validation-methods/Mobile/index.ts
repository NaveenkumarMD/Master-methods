export{}
declare global{
    interface String{
        /**
         * MD
         * 
         * A String method that checks whether the given number is valid or not.
         * 
         * Example:
         * ```typecript
         * const mobile="+91 8870497448"
         * mobile.validateMobile()//returns true;
         * ```
         * 
         */
        validateMobile():boolean;
    }
}
String.prototype.validateMobile=function():boolean{
    if(this===null || this===undefined || this==="")throw new Error("Invalid String");
    let x:any=this
    const re=/^[0-9 +]+$/i
    return re.test(x)
}
