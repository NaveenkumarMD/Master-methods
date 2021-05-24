"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Sort");
Array.prototype.median = function () {
    if (this.length % 2 == 1)
        return this.sortf()[Math.round(this.length / 2) - 1];
    return (this.sortf()[Math.round(this.length / 2) - 1] + this.sortf()[Math.round(this.length / 2)]) / 2;
};
//# sourceMappingURL=index.js.map