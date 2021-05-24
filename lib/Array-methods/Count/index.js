"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.count = function (value) {
    var count = 0;
    this.forEach(function (x) { if (x == value)
        count++; });
    return count;
};
//# sourceMappingURL=index.js.map