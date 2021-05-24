"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Sort");
Array.prototype.getElements = function Array(count, func, key) {
    if (func === void 0) { func = function (x) { return (true || false); }; }
    if (count > this.length)
        throw Error("Count is greater thean the length of the given array....");
    var array = [];
    var x = this;
    if (key == -1)
        x = x.reverse();
    for (var i = 0; i < this.length; i++) {
        if (func(x[i]))
            array.push(x[i]);
        if (array.length == count && key == -1)
            return array.reverse();
        else if (array.length == count)
            return array;
    }
    if (key == -1)
        return array.reverse();
    return array;
};
//# sourceMappingURL=index.js.map