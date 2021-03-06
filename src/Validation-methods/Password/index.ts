export {}
declare global{
    interface String{
        /**
         * "MD"
         * 
         * A string method checks whether a password is strong or not.
         * Password should contains
         *      Lowercase letters
         *      Uppercase letters
         *      Special characters
         *      Numbers
         * to be strong
         * 
         * Example
         * ```typescript
         * const pass="Naveen@1234"
         * pass.validatePass()//returns "strong"
         * ```
         */
        validatePass():"strong"| "normal" |"weak"| "invalid";
    }
}
String.prototype.validatePass=function(){
    if (this.length==0 || this===null || this===undefined || this===" ") {
        return "invalid"
    }
    var special_characters=/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
    var numbers = /[0-9]/g;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    if(this.length>8 && this.match(special_characters) && this.match(numbers) && this.match(lowerCaseLetters) && this.match(upperCaseLetters)){
        return "strong";
    }
    if(this.length>8 && this.match(numbers) && this.match(lowerCaseLetters)){
        return "normal";
    }
    return "weak";
}