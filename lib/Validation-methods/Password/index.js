"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.validatePass = function () {
    var special_characters = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
    var numbers = /[0-9]/g;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    if (this.length > 8 && this.match(special_characters) && this.match(numbers) && this.match(lowerCaseLetters) && this.match(upperCaseLetters)) {
        return "strong";
    }
    if (this.length > 8 && this.match(numbers) && this.match(lowerCaseLetters)) {
        return "normal";
    }
    return "weak";
};
//# sourceMappingURL=index.js.map