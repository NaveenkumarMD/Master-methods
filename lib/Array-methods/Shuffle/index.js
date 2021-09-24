"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.shuffle = function () {
    for (let index = 0; index < this.length; index++) {
        let a = Math.floor(Math.random() * this.length);
        let temp = this[index];
        this[index] = this[a];
        this[a] = temp;
    }
    return this;
};
//# sourceMappingURL=index.js.map