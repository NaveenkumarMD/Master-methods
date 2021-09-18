"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.count = function (str) {
    let count = 0;
    let y = this;
    while (y.indexOf(str) != -1) {
        count++;
        y = y.replace(str, "");
    }
    return count;
};
//# sourceMappingURL=index.js.map