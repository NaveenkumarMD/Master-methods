"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Truncate");
String.prototype.startsWith = function (value) {
    return this.truncate(value).length == 0;
};
//# sourceMappingURL=index.js.map