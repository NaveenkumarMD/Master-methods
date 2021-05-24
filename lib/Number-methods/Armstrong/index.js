"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Length");
Number.prototype.isArmstrong = function () {
    var x = 0;
    for (var i = 0; i < this.length(); i++) {
        x += Math.pow(Number(this.toString()[i]), this.length());
    }
    return x == this ? true : false;
};
//# sourceMappingURL=index.js.map