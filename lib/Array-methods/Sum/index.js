"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.sum = function (func) {
    if (func === void 0) { func = function (x) { return x; }; }
    return this.reduce(function (res, x) { return res + func(x); });
};
//# sourceMappingURL=index.js.map