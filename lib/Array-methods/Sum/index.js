"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.sum = function (func = x => x) {
    return this.reduce((res, x) => res + func(x));
};
//# sourceMappingURL=index.js.map