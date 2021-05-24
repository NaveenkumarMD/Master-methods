"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.isAlnum = function () {
    var x = this;
    var re = /^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/;
    return re.test(x);
};
//# sourceMappingURL=index.js.map