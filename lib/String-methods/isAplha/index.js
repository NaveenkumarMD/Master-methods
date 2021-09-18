"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.isAlpha = function () {
    let x = this;
    const re = /^[A-Z ]+$/i;
    return re.test(x);
};
//# sourceMappingURL=index.js.map