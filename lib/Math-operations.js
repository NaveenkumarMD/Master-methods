"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.roundoff = exports.modulo = exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function divide(a, b) {
    return a / b;
}
exports.divide = divide;
function modulo(a, b) {
    return a % b;
}
exports.modulo = modulo;
function roundoff(value, digits) {
    var factor = Math.pow(10, digits);
    return Math.round(value * factor) / factor;
}
exports.roundoff = roundoff;
function random(digits, min, max) {
    if (min != undefined && max != undefined)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    if (digits != undefined) {
        var factor = Math.pow(10, digits);
        return Math.floor(Math.random() * (factor - factor / 10)) + (factor / 10);
    }
    return Math.floor(Math.random() * 1000000);
}
exports.random = random;
//# sourceMappingURL=Math-operations.js.map