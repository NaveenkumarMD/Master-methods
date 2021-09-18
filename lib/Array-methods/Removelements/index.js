"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function contains(array, value) {
    let flag = false;
    array.forEach(element => {
        if (element == value)
            flag = true;
    });
    return flag;
}
Array.prototype.remove = function (values) {
    if (values == undefined)
        throw new Error("Value parameter must be given with some values..");
    if (typeof values == "string")
        return this.filter(element => typeof element != values);
    let array = values;
    if (typeof values != "object")
        array = [values];
    return this.filter(element => !contains(array, element));
};
//# sourceMappingURL=index.js.map