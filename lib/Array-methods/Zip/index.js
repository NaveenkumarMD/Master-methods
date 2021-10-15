"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.zip = function (array) {
    var obj = {};
    var len = this.length > array.length ? this.length : array.length;
    var i = 0;
    while (i < len) {
        var temp = this[i];
        obj = Object.assign(Object.assign({}, obj), { temp: array[i] });
    }
    return obj;
};
//# sourceMappingURL=index.js.map