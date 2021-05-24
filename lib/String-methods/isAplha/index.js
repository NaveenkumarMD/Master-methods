"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.isAlpha = function () {
    var x = this;
    var re = /^[A-Z ]+$/i;
    return re.test(x);
};
//# sourceMappingURL=index.js.map