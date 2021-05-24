"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function contains(array, value) {
    var flag = false;
    array.forEach(function (element) {
        if (element == value)
            flag = true;
    });
    return flag;
}
Array.prototype.remove = function (values) {
    if (values == undefined)
        throw new Error("Value parameter must be given with some values..");
    if (typeof values == "string")
        return this.filter(function (element) { return typeof element != values; });
    var array = values;
    if (typeof values != "object")
        array = [values];
    return this.filter(function (element) { return !contains(array, element); });
};
//# sourceMappingURL=index.js.map