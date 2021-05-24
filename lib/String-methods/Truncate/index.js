"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.truncate = function (index) {
    if (typeof index == "number")
        return this.slice(0, index);
    return this.slice(0, this.indexOf(index));
};
//# sourceMappingURL=index.js.map