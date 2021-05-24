"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.sum = function (func, thisArg) {
    if (func === void 0) { func = function (x) { return x; }; }
    if (thisArg === void 0) { thisArg = this; }
    return thisArg.reduce(function (acc, t) { return acc + func(t); }, 0);
};
//# sourceMappingURL=Array-operations.js.map