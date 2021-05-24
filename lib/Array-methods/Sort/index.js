"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.sortf = function (key, func) {
    if (func === void 0) { func = function (x) { return x; }; }
    var k = key == undefined ? 1 : (key == 1 ? 1 : -1);
    return this.sort(function (a, b) { return func(a) > func(b) ? k : -k; });
};
//# sourceMappingURL=index.js.map