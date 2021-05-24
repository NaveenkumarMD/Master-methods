"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.camelCase = function () {
    return this.replace(/\W+(.)/g, function (match, chr) { return chr.toUpperCase(); });
};
//# sourceMappingURL=index.js.map