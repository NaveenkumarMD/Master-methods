"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.distinct = function () {
    return this.filter((value, index, self) => self.indexOf(value) === index);
};
//# sourceMappingURL=index.js.map