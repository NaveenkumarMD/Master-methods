export{}
declare global{
    interface String{
        /**
         * "MD"
         * 
         * A string method that validates the mail.
         * 
         * Example:
         * ```typescript
         * const mail="naveen9715568487@gmail.com";
         * mail.validateMail() //returns true
         * ```
         */
        validateMail():boolean;
    }
}
String.prototype.validateMail=function():boolean{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this).toLowerCase());
}