"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Truncate");
String.prototype.endsWith = function (value) {
    var index = this.length - value.length;
    return index > 0 && this.indexOf(value, index) > -1;
};
//# sourceMappingURL=index.js.map