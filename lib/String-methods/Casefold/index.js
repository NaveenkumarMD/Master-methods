"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.casefold = function () {
    return this.replace(/[A-Z]/g, function (x) {
        return x.toLocaleLowerCase();
    });
};
//# sourceMappingURL=index.js.map