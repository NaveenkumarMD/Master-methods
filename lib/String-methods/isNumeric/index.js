"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.isNum = function () {
    let x = this;
    const re = /^[0-9.]+$/;
    return re.test(x);
};
//# sourceMappingURL=index.js.map