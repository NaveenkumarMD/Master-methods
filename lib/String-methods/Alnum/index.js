"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.isAlnum = function () {
    let x = this;
    const re = /^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/;
    return re.test(x);
};
//# sourceMappingURL=index.js.map