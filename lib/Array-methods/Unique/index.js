"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.distinct = function () {
    return this.filter(function (value, index, self) { return self.indexOf(value) === index; });
};
//# sourceMappingURL=index.js.map