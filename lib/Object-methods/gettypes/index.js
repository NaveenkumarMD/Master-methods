"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.prototype.gettypes = function () {
    const arr = new Set([]);
    var x = Object.values(this);
    x.forEach(e => {
        return arr.add(typeof (e));
    });
    return Array.from(arr);
};
//# sourceMappingURL=index.js.map