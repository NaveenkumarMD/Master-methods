"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Number.prototype.isComposite = function () {
    if (this == 1 || this == 2)
        return false;
    for (let x = 2; x < this; x++) {
        if (this % x == 0) {
            return true;
        }
    }
    return false;
};
//# sourceMappingURL=index.js.map