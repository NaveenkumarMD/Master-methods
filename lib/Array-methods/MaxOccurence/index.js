"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Count");
require("../Unique");
Array.prototype.getmostOccurence = function () {
    var _this = this;
    if (this.length == 0)
        throw new Error("Array is Empty....");
    var array = this.distinct();
    var value = 0;
    var occurences = 0;
    this.forEach(function (x) {
        var count = _this.count(x);
        if (count > occurences) {
            value = x;
            occurences = count;
        }
    });
    return { value: value, occurences: occurences };
};
//# sourceMappingURL=index.js.map