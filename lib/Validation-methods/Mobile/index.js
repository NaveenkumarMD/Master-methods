"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.validateMobile = function () {
    let x = this;
    const re = /^[0-9 +]+$/i;
    return re.test(x);
};
//# sourceMappingURL=index.js.map