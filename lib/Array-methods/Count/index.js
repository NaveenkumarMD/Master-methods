"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.count = function (value) {
    let count = 0;
    this.forEach(x => { if (x == value)
        count++; });
    return count;
};
//# sourceMappingURL=index.js.map