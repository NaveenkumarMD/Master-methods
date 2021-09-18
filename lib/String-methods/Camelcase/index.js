"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.camelCase = function () {
    return this.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
};
//# sourceMappingURL=index.js.map