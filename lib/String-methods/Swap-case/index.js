"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.swapcase = function () {
    return this.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
};
//# sourceMappingURL=index.js.map