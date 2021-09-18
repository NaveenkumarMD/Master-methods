"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Count");
require("../Unique");
Array.prototype.getmostOccurence = function () {
    if (this.length == 0)
        throw new Error("Array is Empty....");
    var array = this.distinct();
    let value = 0;
    let occurences = 0;
    this.forEach((x) => {
        let count = this.count(x);
        if (count > occurences) {
            value = x;
            occurences = count;
        }
    });
    return { value, occurences };
};
//# sourceMappingURL=index.js.map