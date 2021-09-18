"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.sortf = function (key, func = x => x) {
    let k = key == undefined ? 1 : (key == 1 ? 1 : -1);
    return this.sort((a, b) => func(a) > func(b) ? k : -k);
};
//# sourceMappingURL=index.js.map