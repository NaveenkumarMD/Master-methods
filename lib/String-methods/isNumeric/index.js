"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.isNum = function () {
    var x = this;
    var re = /^[0-9.]+$/;
    return re.test(x);
};
//# sourceMappingURL=index.js.map